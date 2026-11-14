import { beforeEach, expect, test } from "vitest";
import { mountCounter } from "./counter.ts";

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
  mountCounter(root);
});

test("starts at zero", () => {
  expect(count()).toBe("0");
});

test('has a button labelled "+1"', () => {
  expect(button().textContent).toBe("+1");
});

test("each click increases the number by exactly one", () => {
  for (let clicks = 1; clicks <= 25; clicks++) {
    button().click();
    expect(count()).toBe(String(clicks));
  }
});
