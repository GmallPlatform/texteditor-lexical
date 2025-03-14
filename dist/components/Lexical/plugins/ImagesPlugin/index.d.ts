import { LexicalEditor } from 'lexical';
import { ImagePayload } from '../../nodes/ImageNode';
export type InsertImagePayload = Readonly<ImagePayload>;
export declare function InsertImageUriDialogBody({ onClick, onCancel, }: {
    onClick: (payload: InsertImagePayload) => void;
    onCancel: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function InsertImageUploadedDialogBody({ onClick, onCancel, }: {
    onClick: (payload: InsertImagePayload) => void;
    onCancel: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function InsertImageDialog({ activeEditor, onClose, InsertImageFromListDialogBody, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
    InsertImageFromListDialogBody?: React.ComponentType<{
        onClick: (payload: InsertImagePayload) => void;
        onCancel: () => void;
    }>;
}): JSX.Element;
export default function ImagesPlugin({ captionsEnabled, }: {
    captionsEnabled?: boolean;
}): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
