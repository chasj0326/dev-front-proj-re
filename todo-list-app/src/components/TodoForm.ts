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
      <button><i class="fa-solid fa-plus"></i></button>
      <input type="text" placeholder="새로운 할 일을 작성하세요."/>
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
