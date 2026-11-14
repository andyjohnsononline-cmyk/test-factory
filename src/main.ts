import { mountCounter } from "./counter.ts";

const root = document.querySelector<HTMLElement>("#app");
if (!root) throw new Error("Missing #app element");

mountCounter(root);
