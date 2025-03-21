import { Option } from "effect";
import { HttpError } from "fresh";
import { define } from "../../../utils.ts";
import {
  newThread,
  constants as openAiConstants,
} from "../../../utils/openai/assistant.ts";

export const handler = define.handlers({
  async GET(): Promise<Response> {
    if (Option.isNone(openAiConstants)) {
      throw new HttpError(404);
    }

    const { client } = openAiConstants.value;

    const thread = await newThread(client);

    return new Response(JSON.stringify(thread), {
      headers: new Headers([["Content-Type", "application/json"]]),
    });
  },
});
