export interface LexicalEditorProps {
    initialContent?: string;
    onContentChange?: (d: string) => void;
    readOnly?: boolean;
    isAutosaving?: boolean;
    toolbarHide?: boolean;
    hideBorder?: boolean;
    addButtonForToolbar?: JSX.Element[];
}
declare const EditLexical: ({ initialContent, onContentChange, readOnly, isAutosaving, toolbarHide, hideBorder, addButtonForToolbar, }: LexicalEditorProps) => import("react/jsx-runtime").JSX.Element;
export default EditLexical;
