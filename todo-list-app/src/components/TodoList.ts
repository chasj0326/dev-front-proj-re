import Component from "../core/Component";
import { Todo } from "../types/main";

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
            } id="check-${todo.id}"/>
            <label for="check-${todo.id}">
              <i class="fa-solid fa-check"></i>
            </label>
            <span class="${
              todo.completed ? "completed" : ""
            }">${todo.text}</span>
            <button type="button">
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

      if (
        target.tagName === "INPUT" ||
        target.tagName === "SPAN"
      ) {
        id && this.events.onToggle(id);
      } else if (
        target.tagName === "BUTTON" ||
        target.parentElement?.tagName === "BUTTON"
      ) {
        id && this.events.onDelete(id);
      }
    });
  }
}
