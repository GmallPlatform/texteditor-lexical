export interface LexicalEditorProps {
    initialContent?: string;
    onContentChange?: (d: string) => void;
    readOnly?: boolean;
    isAutosaving?: boolean;
    toolbarHide?: boolean;
    hideBorder?: boolean;
    addButtonForToolbar?: JSX.Element[];
    placeholder?: string;
    onFocusChange?: (isFocused: boolean) => void;
    onHoverChange?: (isHovered: boolean) => void;
    uploadImage?: boolean;
}
declare const EditLexical: ({ initialContent, onContentChange, readOnly, isAutosaving, toolbarHide, hideBorder, addButtonForToolbar, placeholder, onFocusChange, onHoverChange, uploadImage, }: LexicalEditorProps) => import("react/jsx-runtime").JSX.Element;
export default EditLexical;
