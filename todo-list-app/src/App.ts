import {
  Header,
  TodoForm,
  TodoList,
  TodoCount,
} from "./components";
import { _todo, todoStorage } from "./domain";
import { Todo } from "./types/main";
import { createDOMElement } from "./service";
import TodoControl from "./components/TodoControl";

interface Props {
  $app: HTMLElement;
}

export default class App {
  private $app;
  private state: Todo[];
  private todoControl: TodoControl;
  private todoList: TodoList;
  private todoCount: TodoCount;

  constructor({ $app }: Props) {
    this.$app = $app;
    this.state = todoStorage.getItem();

    this.todoCount = new TodoCount({
      initialState: _todo.count(this.state),
      $parent: this.$app,
      $element: createDOMElement("div", {
        class: "todo-count",
      }),
      events: {},
    });

    new Header({
      initialState: {
        title: "Todo List",
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

    this.todoControl = new TodoControl({
      initialState: this.state,
      $parent: this.$app,
      $element: createDOMElement("div", {
        class: "todo-control",
      }),
      events: {
        onToggleAll: () => this.handleToggleAll(),
        onRemoveAll: () => this.handleRemoveAll(),
        onRemoveCompleted: () =>
          this.handleRemoveCompleted(),
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
        onRemove: id => this.handleRemove(id),
        onEdit: id => this.handleEdit(id),
      },
    });
  }

  setState(nextState: Todo[]) {
    this.state = nextState;
    todoStorage.setItem(this.state);
    this.todoControl.setState(this.state);
    this.todoList.setState(this.state);
    this.todoCount.setState(_todo.count(this.state));
  }

  private handleSubmit(text: string) {
    this.setState(_todo.add(text, this.state));
  }
  private handleToggle(id: string) {
    this.setState(_todo.toggle(id, this.state));
  }
  private handleRemove(id: string) {
    this.setState(_todo.remove(id, this.state));
  }
  private handleEdit(id: string) {
    this.setState(_todo.edit(id, this.state));
  }
  private handleToggleAll() {
    this.setState(_todo.toggleAll(this.state));
  }
  private handleRemoveAll() {
    this.setState([]);
  }
  private handleRemoveCompleted() {
    this.setState(_todo.removeCompleted(this.state));
  }
}
