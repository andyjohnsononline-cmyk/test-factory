/** Renders the game into `root`: a number starting at zero and a "+1" button. */
export function mountCounter(root: HTMLElement): void {
  let count = 0;

  const display = document.createElement("output");
  display.className = "count";
  display.setAttribute("aria-live", "polite");

  const button = document.createElement("button");
  button.type = "button";
  button.className = "increment";
  button.textContent = "+1";

  const render = () => {
    display.textContent = String(count);
  };

  button.addEventListener("click", () => {
    count += 1;
    render();
  });

  render();
  root.replaceChildren(display, button);
}
