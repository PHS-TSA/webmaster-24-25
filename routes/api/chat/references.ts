import { HttpError } from "fresh";
import { define } from "../../../utils.ts";
import {
  constants as openAiConstants,
  retrieve,
} from "../../../utils/openai/assistant.ts";

import { Option } from "effect";

export const handler = define.handlers({
  async GET(ctx): Promise<Response> {
    const url = new URL(ctx.req.url);
    const fileId = url.searchParams.get("file_id");
    if (fileId === null || Option.isNone(openAiConstants)) {
      throw new HttpError(404);
    }

    const { client } = openAiConstants.value;

    const file = await retrieve(fileId, client);

    return new Response(JSON.stringify(file), {
      headers: new Headers([["Content-Type", "application/json"]]),
    });
  },
});
