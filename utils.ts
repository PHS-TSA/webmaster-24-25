import { createDefine } from "fresh";

// biome-ignore lint/suspicious/noEmptyInterface: Otherwise, this triggers `noBannedTypes`.
export interface State {}

export const define = createDefine<State>();
