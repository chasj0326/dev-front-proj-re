import {
  Header,
  TodoForm,
  TodoList,
  TodoCount,
} from "./components";
import { _todo, todoStorage } from "./domain";
import { Todo } from "./types/main";
import { createDOMElement } from "./service";

interface Props {
  $app: HTMLElement;
}

export default class App {
  private $app;
  private state: Todo[];
  private todoList: TodoList;
  private todoCount: TodoCount;

  constructor({ $app }: Props) {
    this.$app = $app;
    this.state = todoStorage.getItem();

    new Header({
      initialState: {
        title: "My App",
      },
      $parent: this.$app,
      $element: createDOMElement("header"),
      events: {},
    });

    new TodoForm({
      initialState: {},
      $parent: this.$app,
      $element: createDOMElement("form"),
      events: {
        onSubmit: text => this.handleSubmit(text),
      },
    });

    this.todoList = new TodoList({
      initialState: this.state,
      $parent: this.$app,
      $element: createDOMElement("div", {
        class: "todo-list",
      }),
      events: {
        onToggle: id => this.handleToggle(id),
        onDelete: id => this.handleDelete(id),
      },
    });

    this.todoCount = new TodoCount({
      initialState: _todo.count(this.state),
      $parent: this.$app,
      $element: createDOMElement("div", {
        class: "todo-count",
      }),
      events: {},
    });
  }

  setState(nextState: Todo[]) {
    this.state = nextState;
    todoStorage.setItem(this.state);
    this.todoList.setState(this.state);
    this.todoCount.setState(_todo.count(this.state));
  }

  private handleSubmit(text: string) {
    this.setState(_todo.add(text, this.state));
  }
  private handleToggle(id: string) {
    this.setState(_todo.toggle(id, this.state));
  }
  private handleDelete(id: string) {
    this.setState(_todo.remove(id, this.state));
  }
}
