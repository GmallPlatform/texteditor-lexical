import { InsertImagePayload } from './plugins/ImagesPlugin';
import { default as React } from 'react';
export default function ToolbarPlugin({ isAutosaving, isDisabled, InsertImageFromListDialogBody, addButtonForToolbar, }: {
    isAutosaving?: boolean;
    isDisabled?: boolean;
    InsertImageFromListDialogBody?: React.ComponentType<{
        onClick: (payload: InsertImagePayload) => void;
        onCancel: () => void;
    }>;
    addButtonForToolbar?: JSX.Element[];
}): import("react/jsx-runtime").JSX.Element;
