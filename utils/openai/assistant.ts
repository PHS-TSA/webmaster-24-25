import { OpenAI } from "@openai/openai";
import { Option } from "effect";

function getClient(): Option.Option<{
  client: OpenAI;
  assistant_id: string;
}> {
  try {
    const client: OpenAI = new OpenAI({
      baseURL: Deno.env.get("OPENAI_BASE_URL"),
    });

    const assistant_id = Deno.env.get("ASSISTANT_ID");

    if (!assistant_id) {
      throw new Error("ASSISTANT_ID is required.");
    }

    return Option.some({ client, assistant_id });
  } catch {
    return Option.none();
  }
}

export const constants = getClient();

export async function newThread(
  client: OpenAI,
): Promise<OpenAI.Beta.Threads.Thread> {
  return await client.beta.threads.create();
}

export async function* ask(
  q: string,
  thread_id: string,
  assistant_id: string,
  client: OpenAI,
): AsyncGenerator<OpenAI.Beta.Threads.Messages.Message, void, unknown> {
  await client.beta.threads.messages.create(thread_id, {
    role: "user",
    content: q,
  });
  await client.beta.threads.runs.createAndPoll(thread_id, {
    assistant_id,
  });

  for await (const message of client.beta.threads.messages.list(thread_id)) {
    yield message;
  }
}

export async function retrieve(
  fileId: string,
  client: OpenAI,
): Promise<OpenAI.Files.FileObject> {
  return await client.files.retrieve(fileId);
}
