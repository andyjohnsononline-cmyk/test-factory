import { mountGame } from "./game.ts";

const root = document.querySelector<HTMLElement>("#app");
if (!root) throw new Error("Missing #app element");

mountGame(root);
