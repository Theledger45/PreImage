export function el(tag, options = {}) {
  const node = document.createElement(tag);
  const {
    className,
    text,
    html,
    attrs = {},
    children = []
  } = options;

  if (className) node.className = className;
  if (text) node.textContent = text;
  if (html) node.innerHTML = html;

  Object.entries(attrs).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });

  children.forEach((child) => {
    if (child) node.appendChild(child);
  });

  return node;
}

export function mount(parentSelector, node) {
  const parent = document.querySelector(parentSelector);
  if (!parent) {
    throw new Error(`Cannot mount into missing selector: ${parentSelector}`);
  }

  parent.innerHTML = "";
  parent.appendChild(node);
}
