declare const _default: {
    title: string;
    component: ({ initialContent, onContentChange, readOnly, isAutosaving, toolbarHide, hideBorder, addButtonForToolbar, }: import('./LexicalEditor').LexicalEditorProps) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: {
        initialContent: string;
        readOnly: boolean;
        isAutosaving: boolean;
    };
};
export declare const ReadOnly: {
    args: {
        initialContent: string;
        readOnly: boolean;
    };
};
export declare const AutosaveTrue: {
    args: {
        initialContent: string;
        readOnly: boolean;
        isAutosaving: boolean;
    };
};
export declare const WithUppercaseButton: {
    args: {
        initialContent: string;
        readOnly: boolean;
        isAutosaving: boolean;
        addButtonForToolbar: import("react/jsx-runtime").JSX.Element[];
    };
};
