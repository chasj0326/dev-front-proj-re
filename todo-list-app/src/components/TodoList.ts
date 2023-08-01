import Component from "../core/Component";
import { Todo } from "../types/main";
import { _todo } from "../domain";

interface Events {
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default class TodoList extends Component<
  Todo[],
  Events
> {
  render(): void {
    this.$element.innerHTML = `
    <ul>
      ${this.state
        .map(
          todo => `
          <li data-id="${todo.id}" key="${todo.id}">
            <input type="checkbox" ${
              todo.completed && "checked"
            } id="check-${todo.id}" class="todo__check"/>
            <label for="check-${todo.id}">
              <i class="fa-solid fa-check"></i>
            </label>
            <span class="${
              todo.completed ? "completed" : ""
            }">${todo.text}</span>
            <button type="button" class="todo__delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        `
        )
        .join("")}
    </ul>
    `;
  }

  initEvent(): void {
    this.$element.addEventListener("click", e => {
      const target = e.target as HTMLElement;
      const $li = target.closest("li");
      const id = $li?.dataset.id;
      if (!id) return;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "SPAN"
      ) {
        this.events.onToggle(id);
      } else if (
        target.tagName === "BUTTON" ||
        target.parentElement?.tagName === "BUTTON"
      ) {
        this.events.onDelete(id);
      }
    });
  }
}
