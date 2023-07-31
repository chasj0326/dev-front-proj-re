import Component from "../core/Component";
import { TodoCountData } from "../types/main";

export default class TodoCount extends Component<
  TodoCountData,
  {}
> {
  render(): void {
    const { totalCount, completedCount } = this.state;
    this.$element.innerHTML = `
      <div>Total: ${totalCount}</div>
      <div>Completed: ${completedCount}</div>
    `;
  }
}
