<script setup>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <TodoForm @addTodo="addTodo"/>
  <TodoList 
    :todos="todos" 
    @toggleTodo="toggleTodo"
    @deleteTodo="deleteTodo"/>
</template>

<script>
export default {
  components: {
    TodoForm
  },
  data() {
    return {
      todos: []
    }
  },
  computed: {
    totalCount() {
      return this.todos.length;
    },
    completedCount() {
      return this.todos.filter(todo => todo.completed).length
    }
  },
  methods: {
    addTodo(newText) {
      this.todos.push({
        text: newText,
        id: new Date().getTime().toString(36),
        completed: false,
      });
    },
    toggleTodo(id){
      this.todos = this.todos.map(
        todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style scoped>
</style>
