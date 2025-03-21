/**
 * Interpolates a string with values.
 * It's used for Tailwind CSS class formatting and autocompletion.
 *
 * @param strings - The strings to interpolate.
 * @param values - The values to interpolate.
 * @returns The interpolated string.
 */
export function tw(
  strings: TemplateStringsArray,
  ...values: readonly unknown[]
): string {
  return String.raw({ raw: strings }, ...values);
}
