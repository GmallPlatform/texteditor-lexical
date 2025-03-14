import { LexicalEditor } from 'lexical';
import { InlineImagePayload } from '../../nodes/InlineImageNode/InlineImageNode';
export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export declare function InsertInlineImageDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export default function InlineImagePlugin(): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
