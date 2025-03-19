import { Schema } from "effect";
import { type Thread, ThreadSchema } from "../../utils/openai/schemas.ts";

export async function getThread(): Promise<Thread | undefined> {
  try {
    const res = await fetch("/api/chat/thread/");
    const json = await res.json();

    return Schema.decodeUnknownSync(ThreadSchema)(json);
  } catch {
    return undefined;
  }
}

export async function getThreadId(): Promise<string | undefined> {
  const thread = await getThread();

  return thread?.id;
}
