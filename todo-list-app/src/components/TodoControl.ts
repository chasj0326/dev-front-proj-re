import Component from "../core/Component";
import { Todo } from "../types/main";
import { _todo } from "../domain";

interface Events {
  onToggleAll: () => void;
  onDeleteAll: () => void;
}

export default class TodoControl extends Component<
  Todo[],
  Events
> {
  render(): void {
    if (this.state.length === 0) {
      this.$element.style.display = "none";
    } else {
      this.$element.style.display = "flex";
      this.$element.innerHTML = `
      <div>
        <input type="checkbox" ${
          _todo.isAllChecked(this.state) && "checked"
        } id="check-all" class="todo__check"/>
        <label for="check-all">
          <i class="fa-solid fa-check-double"></i>
        </label>
        <span>check/uncheck all</span>
      </div>
      <div>
        <button type="button" class="todo__delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <span>delete all</span>
      </div>
      `;
    }
  }

  initEvent(): void {
    this.$element.addEventListener("click", e => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT") {
        this.events.onToggleAll();
      } else if (
        target.tagName === "BUTTON" ||
        target.parentElement?.tagName === "BUTTON"
      ) {
        this.events.onDeleteAll();
      }
    });
  }
}
