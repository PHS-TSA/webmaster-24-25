import { Schema } from "effect";
import {
  type FileObject,
  FileObjectSchema,
} from "../../utils/openai/schemas.ts";

export async function getFileData(
  fileId: string,
): Promise<FileObject | undefined> {
  try {
    const res = await fetch(
      `/api/chat/references/?file_id=${encodeURIComponent(fileId)}`,
    );
    const json = await res.json();

    return Schema.decodeUnknownSync(FileObjectSchema)(json);
  } catch {
    return undefined;
  }
}
