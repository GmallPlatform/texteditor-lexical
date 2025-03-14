import { createCommand, LexicalCommand } from "lexical";
import { InsertImagePayload } from "../plugins/ImagesPlugin";
import { InlineImagePayload } from "../nodes/InlineImageNode/InlineImageNode";

export const blockTypeToBlockName = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
};
export const imageCache = new Set();
export const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload> =
  createCommand("INSERT_IMAGE_COMMAND");
export const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload> =
  createCommand("INSERT_INLINE_IMAGE_COMMAND");
