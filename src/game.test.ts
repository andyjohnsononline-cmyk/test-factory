import { beforeEach, expect, test } from "vitest";
import { mountGame } from "./game.ts";

let root: HTMLElement;
const count = () => root.querySelector("output")?.textContent;
const buttonLabelled = (label: string) => {
  const el = [...root.querySelectorAll("button")].find((b) => b.textContent === label);
  if (!el) throw new Error(`No button labelled "${label}" rendered`);
  return el;
};
const increment = () => buttonLabelled("+1");
const reset = () => buttonLabelled("Reset");
const incrementTimes = (n: number) => {
  for (let i = 0; i < n; i++) increment().click();
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
  expect(increment()).toBeInstanceOf(HTMLButtonElement);
});

test("each Increment adds exactly one to the Count", () => {
  for (let increments = 1; increments <= 25; increments++) {
    increment().click();
    expect(count()).toBe(String(increments));
  }
});

test('has a button labelled "Reset"', () => {
  expect(reset()).toBeInstanceOf(HTMLButtonElement);
});

test("Reset returns the Count to zero", () => {
  incrementTimes(7);
  expect(count()).toBe("7");
  reset().click();
  expect(count()).toBe("0");
});

test("Reset at zero leaves the Count at zero", () => {
  reset().click();
  expect(count()).toBe("0");
});

test("Increments after a Reset count up from zero again", () => {
  incrementTimes(3);
  reset().click();
  increment().click();
  expect(count()).toBe("1");
});
