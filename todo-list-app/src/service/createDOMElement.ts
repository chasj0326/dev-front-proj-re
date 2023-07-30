interface DOMAttributes {
  class?: string;
  id?: string;
}

export const createDOMElement = (
  tagName: string,
  attributes: DOMAttributes = {}
): HTMLElement => {
  const $element = document.createElement(tagName);

  Object.entries(attributes).forEach(([attr, value]) => {
    $element.setAttribute(attr, value);
  });

  return $element;
};
