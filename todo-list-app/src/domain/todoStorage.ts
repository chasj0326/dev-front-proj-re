import { _Storage } from "../service";
import { Todo } from "../types/main";

const todoStorage = new _Storage<Todo[]>({
  storage: localStorage,
  key: "todos",
  defaultValue: [],
});

export default todoStorage;
