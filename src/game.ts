/**
 * Renders the Game into `root`: the Count, starting at zero, the Increment
 * button, and the Reset button that returns the Count to zero.
 */
export function mountGame(root: HTMLElement): void {
  let count = 0;

  const display = document.createElement("output");
  display.className = "count";
  display.setAttribute("aria-live", "polite");

  const increment = document.createElement("button");
  increment.type = "button";
  increment.className = "increment";
  increment.textContent = "+1";

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "reset";
  reset.textContent = "Reset";

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
