import Component from "../core/Component";

interface Events {
  onSubmit: (text: string) => void;
}

export default class TodoForm extends Component<
  {},
  Events
> {
  render(): void {
    this.$element.innerHTML = `
      <input type="text"/>
      <button>add</button>
    `;
  }

  initEvent(): void {
    this.$element.addEventListener("submit", e => {
      e.preventDefault();
      const $input = this.$element.querySelector("input");

      if ($input) {
        const text = $input.value;
        this.events.onSubmit(text);
        $input.value = "";
      }
    });
  }
}
