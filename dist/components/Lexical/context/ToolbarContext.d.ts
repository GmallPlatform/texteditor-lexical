import { ElementFormatType } from 'lexical';
import { ReactNode } from 'react';
import { blockTypeToBlockName } from '../constants/constants';
export declare const MIN_ALLOWED_FONT_SIZE = 8;
export declare const MAX_ALLOWED_FONT_SIZE = 72;
export declare const DEFAULT_FONT_SIZE = 15;
interface rootTypeToRootName {
    root: "Root";
    table: "Table";
}
declare const INITIAL_TOOLBAR_STATE: {
    bgColor: string;
    blockType: keyof typeof blockTypeToBlockName;
    canRedo: boolean;
    canUndo: boolean;
    codeLanguage: string;
    elementFormat: ElementFormatType;
    fontColor: string;
    fontFamily: string;
    fontSize: string;
    fontSizeInputValue: string;
    isBold: boolean;
    isCode: boolean;
    isImageCaption: boolean;
    isItalic: boolean;
    isLink: boolean;
    isRTL: boolean;
    isStrikethrough: boolean;
    isSubscript: boolean;
    isSuperscript: boolean;
    isUnderline: boolean;
    isLowercase: boolean;
    isUppercase: boolean;
    isCapitalize: boolean;
    rootType: keyof rootTypeToRootName;
};
type ToolbarState = typeof INITIAL_TOOLBAR_STATE;
type ToolbarStateKey = keyof ToolbarState;
type ToolbarStateValue<Key extends ToolbarStateKey> = ToolbarState[Key];
interface ContextShape {
    toolbarState: ToolbarState;
    updateToolbarState<Key extends ToolbarStateKey>(key: Key, value: ToolbarStateValue<Key>): void;
}
export declare const ToolbarContext: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useToolbarState: () => ContextShape;
export {};
