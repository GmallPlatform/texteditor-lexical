import { Position } from './InlineImageNode';
import { LexicalEditor, NodeKey } from 'lexical';
export declare function UpdateInlineImageDialog({ activeEditor, nodeKey, onClose, }: {
    activeEditor: LexicalEditor;
    nodeKey: NodeKey;
    onClose: () => void;
}): JSX.Element;
export default function InlineImageComponent({ src, altText, nodeKey, width, height, showCaption, caption, position, }: {
    altText: string;
    caption: LexicalEditor;
    height: "inherit" | number;
    nodeKey: NodeKey;
    showCaption: boolean;
    src: string;
    width: "inherit" | number;
    position: Position;
}): JSX.Element;
