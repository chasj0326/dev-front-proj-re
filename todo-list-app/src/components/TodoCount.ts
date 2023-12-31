import Component from "../core/Component";
import { TodoCountData } from "../types/main";

export default class TodoCount extends Component<
  TodoCountData,
  {}
> {
  render(): void {
    const { totalCount, completedCount } = this.state;
    this.$element.innerHTML = `
      <div 
        class="todo-count__completed"
        style="flex-grow: ${completedCount}">
      </div>
      <div 
        class="todo-count__uncompleted"
        style="flex-grow: ${totalCount - completedCount}">
      </div>
    `;
  }
}
