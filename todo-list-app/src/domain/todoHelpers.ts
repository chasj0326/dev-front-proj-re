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

const add: Add = (text, todos) => [
  ...todos,
  {
    text,
    completed: false,
    id: `${Date.now()}${Math.random()}`,
  },
];

const toggle: Toggle = (id, todos) =>
  todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

const remove: Remove = (id, todos) =>
  todos.filter(todo => todo.id !== id);

const count: Count = todos => ({
  totalCount: todos.length,
  completedCount: todos.filter(todo => todo.completed)
    .length,
});

export default {
  add,
  toggle,
  remove,
  count,
};
