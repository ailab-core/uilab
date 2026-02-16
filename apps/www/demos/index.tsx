import type { ComponentType } from "react"
import { componentsDemos } from "./components"
import { blocksDemos } from "./blocks"

export interface DemoItem {
  component: ComponentType,
  file: string;
}

const allDemos = {
  ...componentsDemos,
  ...blocksDemos
}

export function getDemo(name: string): DemoItem | undefined {
  return allDemos[name];
}
