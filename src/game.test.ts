import { beforeEach, expect, test } from "vitest";
import { mountGame } from "./game.ts";

let root: HTMLElement;
const count = () => root.querySelector("output")?.textContent;
const button = () => {
  const el = root.querySelector("button");
  if (!el) throw new Error("No button rendered");
  return el;
};

beforeEach(() => {
  root = document.createElement("main");
  document.body.replaceChildren(root);
  mountGame(root);
});

test("the Count starts at zero", () => {
  expect(count()).toBe("0");
});

test('has a button labelled "+1"', () => {
  expect(button().textContent).toBe("+1");
});

test("each Increment adds exactly one to the Count", () => {
  for (let increments = 1; increments <= 25; increments++) {
    button().click();
    expect(count()).toBe(String(increments));
  }
});
