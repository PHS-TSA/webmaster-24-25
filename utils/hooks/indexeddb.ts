import { IS_BROWSER } from "fresh/runtime";
import { get, set } from "idb-keyval";
import { useCallback } from "preact/hooks";
import { usePromise } from "./suspense.ts";

export function useIndexedDb<T>(
  key: string,
  def?: () => Promise<T | undefined>,
): T | undefined {
  const callback = useCallback(() => getIndexedDB(key, def), [key, def]);
  return usePromise(callback());
}

/**
 * Use a value from the IndexedDB.
 * If the value doesn't exist, set it to the default.
 *
 * @remarks
 * Unfortunately, this can't distinguish between nonexistent values and existing undefined values!
 * Use with caution!
 *
 * @param key - The key of the item to fetch.
 * @param def - A function returning a promise that might resolve to the default.
 */
export async function getIndexedDB<T>(
  key: string,
  def?: () => Promise<T | undefined>,
): Promise<T | undefined> {
  if (!IS_BROWSER) {
    throw new Error("This is browser-only!");
  }

  const val = await get<T>(key);

  if (val === undefined && def !== undefined) {
    const defaultValue = await def();
    if (defaultValue !== undefined) {
      await set(key, defaultValue);
      return defaultValue;
    }
  }

  return val;
}

/**
 * Set a value in the IndexedDB.
 *
 * @param key - The key of the item to set.
 * @param value - The value to set.
 */
export async function setIndexedDb<T>(key: string, value: T): Promise<void> {
  if (!IS_BROWSER) {
    throw new Error("This is browser-only!");
  }

  await set(key, value);
}
