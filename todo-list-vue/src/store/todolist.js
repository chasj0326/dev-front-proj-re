const STORAGE_KEY = "todos";

export default {
  namespaced: true,

  state() {
    return {
      todos: [],
    };
  },

  getters: {
    completedTodoCount(state) {
      return state.todos.filter(todo => todo.completed)
        .length;
    },
    totalTodoCount(state) {
      return state.todos.length;
    },
  },

  mutations: {
    updateTodos(state, nextTodos) {
      state.todos = nextTodos;
    },
    createTodo(state, text) {
      state.todos.push({
        text,
        id: new Date().getTime().toString(36),
        completed: false,
      });
    },
    toggleTodo(state, id) {
      state.todos = state.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(
        todo => todo.id !== id
      );
    },
    toggleAllTodos(state) {
      const isAllCompleted = state.todos.every(
        todo => todo.completed
      );
      state.todos = state.todos.map(todo => ({
        ...todo,
        completed: !isAllCompleted,
      }));
    },
    deleteCompletedTodos(state) {
      state.todos = state.todos.filter(
        todo => !todo.completed
      );
    },
  },

  actions: {
    readTodos({ commit }) {
      const storedTodos =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      commit("updateTodos", storedTodos);
    },
    storeTodos({ state }) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.todos)
      );
    },
  },
};
