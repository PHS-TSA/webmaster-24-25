import { getFileData } from "../../sdk/chat/references.ts";
import type { Annotation, Message, TextContentBlock } from "./schemas.ts";

type AnnotationReplacement = { regex: RegExp; citation: string };

async function handleAnnotation(
  annotation: Annotation,
): Promise<AnnotationReplacement> {
  switch (annotation.type) {
    case "file_citation": {
      const fileId = annotation.file_citation.file_id;

      const citedFile = await getFileData(fileId);

      if (citedFile === undefined) {
        throw new Error(`File with ID ${fileId} not found`);
      }

      return {
        regex: new RegExp(annotation.text, "g"),
        citation: ` (from ${citedFile.filename})`,
      };
    }

    default: {
      return {
        regex: new RegExp(annotation.text, "g"),
        citation: "",
      };
    }
  }
}

export async function formatRefs(message: Message): Promise<string> {
  const promises: Promise<AnnotationReplacement>[] = [];

  // Iterate over all content blocks
  for (const contentBlock of message.content) {
    if (contentBlock.type !== "text") {
      throw new Error(
        "We only support text content blocks. We don't expose a way create these.",
      );
    }

    // Extract the message content
    const messageContent = contentBlock.text;

    // Map over the annotations to create an array of promises
    promises.push(...messageContent.annotations.map(handleAnnotation));
  }

  const replacements = await Promise.all(promises);

  // Apply all replacements to the message content
  let formattedMessage = message.content
    .map((contentBlock) => (contentBlock as TextContentBlock).text.value)
    .join(" ");

  for (const { regex, citation } of replacements) {
    formattedMessage = formattedMessage.replace(regex, citation);
  }

  return formattedMessage;
}
