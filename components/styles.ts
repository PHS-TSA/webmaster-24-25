import { tw } from "../utils/tags.ts";

/**
 * A nice round button.
 */
export const floatingButtonStyles = tw`flex size-14 flex-row items-center justify-center rounded-full focus-visible:outline-none`;

/**
 * Rounded blue button styles.
 *
 * @see {@link floatingButtonStyles}
 */
export const greenButtonStyles = tw`bg-green-400 shadow-md dark:bg-green-800 focus-visible:ring-1 focus-visible:ring-offset-2`;

/**
 * Make focus rings tolerable.
 */
export const prettyFocus = tw`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-50/70`;
