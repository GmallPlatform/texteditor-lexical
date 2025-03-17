import { InsertImagePayload } from './plugins/ImagesPlugin';
import { default as React } from 'react';
export default function ToolbarPlugin({ isAutosaving, isDisabled, InsertImageFromListDialogBody, addButtonForToolbar, uploadImage, }: {
    isAutosaving?: boolean;
    isDisabled?: boolean;
    InsertImageFromListDialogBody?: React.ComponentType<{
        onClick: (payload: InsertImagePayload) => void;
        onCancel: () => void;
    }>;
    addButtonForToolbar?: JSX.Element[];
    uploadImage?: boolean;
}): import("react/jsx-runtime").JSX.Element;
