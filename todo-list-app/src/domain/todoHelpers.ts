import { Todo, TodoCountData } from "../types/main";

interface Add {
  (text: string, todos: Todo[]): Todo[];
}
interface Toggle {
  (id: string, todos: Todo[]): Todo[];
}
interface Remove {
  (id: string, todos: Todo[]): Todo[];
}
interface Count {
  (todos: Todo[]): TodoCountData;
}
interface Check {
  (todos: Todo[]): boolean;
}
interface All {
  (todos: Todo[]): Todo[];
}

const add: Add = (text, todos) => [
  ...todos,
  {
    text,
    completed: false,
    id: `${Date.now()}${Math.random()}`,
    editing: false,
  },
];

const toggle: Toggle = (id, todos) =>
  todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

const edit: Toggle = (id, todos) =>
  todos.map(todo =>
    todo.id === id
      ? { ...todo, editing: !todo.editing }
      : todo
  );

const remove: Remove = (id, todos) =>
  todos.filter(todo => todo.id !== id);

const count: Count = todos => ({
  totalCount: todos.length,
  completedCount: todos.filter(todo => todo.completed)
    .length,
});

const isAllChecked: Check = todos => {
  return todos.every(todo => todo.completed);
};

const toggleAll: All = todos => {
  if (isAllChecked(todos)) {
    return todos.map(todo => ({
      ...todo,
      completed: false,
    }));
  }
  return todos.map(todo => ({
    ...todo,
    completed: true,
  }));
};

const removeCompleted: All = todos =>
  todos.filter(todo => !todo.completed);

export default {
  add,
  toggle,
  edit,
  remove,
  count,
  isAllChecked,
  toggleAll,
  removeCompleted,
};
