import { Schema } from "effect";
import {
  type ChatThread,
  ChatThreadSchema,
} from "../../utils/openai/schemas.ts";

export async function chat(
  thread: string,
  message: string,
): Promise<ChatThread | undefined> {
  try {
    const res = await fetch(
      `/api/chat/?thread=${encodeURIComponent(thread)}&q=${encodeURIComponent(
        message,
      )}`,
    );
    const json = await res.json();

    return Schema.decodeUnknownSync(ChatThreadSchema)(json);
  } catch {
    return undefined;
  }
}
