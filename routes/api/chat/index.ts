import { Option } from "effect";
import { HttpError } from "fresh";
import { define } from "../../../utils.ts";
import {
  ask,
  constants as openAiConstants,
} from "../../../utils/openai/assistant.ts";
import type { Message } from "../../../utils/openai/schemas.ts";

export const handler = define.handlers({
  async GET(ctx): Promise<Response> {
    const url = new URL(ctx.req.url);
    const message = url.searchParams.get("q");
    const thread_id = url.searchParams.get("thread");
    if (
      message === null ||
      thread_id === null ||
      Option.isNone(openAiConstants)
    ) {
      throw new HttpError(404);
    }

    const { client, assistant_id } = openAiConstants.value;

    const response = ask(message, thread_id, assistant_id, client);
    const responses: Message[] = [];
    for await (const res of response) {
      responses.push(res);
    }

    return new Response(JSON.stringify(responses), {
      headers: new Headers([["Content-Type", "application/json"]]),
    });
  },
});
