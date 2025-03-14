import { LexicalEditor } from 'lexical';
export default function ImageResizer({ onResizeStart, onResizeEnd, imageRef, maxWidth, editor, }: {
    editor: LexicalEditor;
    buttonRef: {
        current: null | HTMLButtonElement;
    };
    imageRef: {
        current: null | HTMLElement;
    };
    maxWidth?: number;
    onResizeEnd: (width: "inherit" | number, height: "inherit" | number) => void;
    onResizeStart: () => void;
    setShowCaption: (show: boolean) => void;
    showCaption: boolean;
    captionsEnabled: boolean;
}): JSX.Element;
