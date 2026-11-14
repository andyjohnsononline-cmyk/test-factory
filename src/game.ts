/**
 * Renders the Game into `root`: the Count, starting at zero, the Increment
 * button, and the Reset button that returns the Count to zero.
 */
export function mountGame(root: HTMLElement): void {
  let count = 0;

  const display = document.createElement("output");
  display.className = "count";
  display.setAttribute("aria-live", "polite");

  const increment = actionButton("increment", "+1");
  const reset = actionButton("reset", "Reset");

  const render = () => {
    display.textContent = String(count);
  };

  increment.addEventListener("click", () => {
    count += 1;
    render();
  });

  reset.addEventListener("click", () => {
    count = 0;
    render();
  });

  render();
  root.replaceChildren(display, increment, reset);
}

/** A Player action's button: styled by `className`, labelled `label`. */
function actionButton(className: string, label: string): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  return button;
}
