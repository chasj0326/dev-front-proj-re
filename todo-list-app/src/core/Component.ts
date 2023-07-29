interface Props<S, E> {
  initialState: S;
  $parent: HTMLElement;
  $element: HTMLElement;
  events: E;
}

export default class Component<State, Events> {
  state: State;
  $element: HTMLElement;
  events: Events;

  constructor({
    initialState,
    $parent,
    $element,
    events,
  }: Props<State, Events>) {
    this.state = initialState;
    this.$element = $element;
    this.events = events;
    $parent.append($element);

    this.render();
    this.initEvent();
  }

  setState(nextState: State) {
    this.state = nextState;
    this.render();
  }

  render() {}

  initEvent() {}
}
