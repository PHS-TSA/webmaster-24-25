import type { OpenAI } from "@openai/openai";
import { Schema } from "effect";

export type FileObject = typeof FileObjectSchema.Type;
export type Thread = typeof ThreadSchema.Type;
export type ChatThread = typeof ChatThreadSchema.Type;
export type ChatMessage = typeof MessageSchema.Type;

/**
 * @remarks
 * This is a very unsafe stub.
 * It does zero validation.
 *
 * @see {@link OpenAI.Files.FileObject}
 */
export const FileObjectSchema = Schema.declare<OpenAI.Files.FileObject>(
  (_): _ is OpenAI.Files.FileObject => true,
);

/**
 * @remarks
 * This is a very unsafe stub.
 * It does zero validation.
 *
 * @see {@link OpenAI.Beta.Threads.Thread}
 */
export const ThreadSchema = Schema.declare<OpenAI.Beta.Threads.Thread>(
  (_): _ is OpenAI.Beta.Threads.Thread => true,
);

/**
 * @remarks
 * This is a very unsafe stub.
 * It does zero validation.
 *
 * @see {@link OpenAI.Beta.Threads.Messages.Message}
 */
export const MessageSchema =
  Schema.declare<OpenAI.Beta.Threads.Messages.Message>(
    (_): _ is OpenAI.Beta.Threads.Messages.Message => true,
  );

/**
 * @remarks
 * This is a very unsafe stub.
 * It does zero validation.
 *
 * @see {@link MessageSchema}
 */
export const ChatThreadSchema = Schema.Array(MessageSchema);

export type Message = OpenAI.Beta.Threads.Messages.Message;
export type Annotation = OpenAI.Beta.Threads.Messages.Annotation;
export type TextContentBlock = OpenAI.Beta.Threads.Messages.TextContentBlock;
