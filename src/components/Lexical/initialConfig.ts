import { InitialConfigType } from "@lexical/react/LexicalComposer";
import { DivNode } from "./plugins/DivNode";
import { CustomHeadingNode } from "./plugins/HeadingNode";
import { InputNode } from "./plugins/InputNode";
import { ImageNode } from "./nodes/ImageNode";
import { InlineImageNode } from "./nodes/InlineImageNode/InlineImageNode";
import { FieldNode } from "./SpanExtendNode";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { LinkNode } from "@lexical/link";
import initTheme from "./theme/initTheme";
export const initialConfig: InitialConfigType = {
  namespace: "EditLexicalEditor",
  theme: initTheme,
  nodes: [
    DivNode,
    InputNode,
    FieldNode,
    HeadingNode,
    CustomHeadingNode,
    QuoteNode,
    ImageNode,
    InlineImageNode,
    ListNode,
    ListItemNode,
    LinkNode,
  ] as unknown as InitialConfigType["nodes"],
  onError: (error: Error) => {
    console.error(error);
  },
};
