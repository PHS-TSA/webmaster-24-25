import { createDefine } from "fresh";

export interface State {
  meta?: Meta;
}

export interface Meta {
  readonly title?: string;
  readonly description?: string;
  readonly hidden?: boolean;
}

export const define = createDefine<State>();
