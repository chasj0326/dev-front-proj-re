import Component from "../core/Component";

export default class Header extends Component<
  { title: string },
  {}
> {
  render(): void {
    this.$element.innerHTML = `
      <div>${this.state.title}</div>
    `;
  }
}
