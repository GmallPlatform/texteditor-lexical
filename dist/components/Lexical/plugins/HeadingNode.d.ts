import { HeadingNode, HeadingTagType, SerializedHeadingNode } from '@lexical/rich-text';
import { DOMConversionMap, EditorConfig, LexicalNode, NodeKey } from 'lexical';
export interface SerializedCustomHeadingNode extends SerializedHeadingNode {
    type: "custom-heading";
    version: 1;
    tag: HeadingTagType;
    attributes: Record<string, string>;
}
export declare class CustomHeadingNode extends HeadingNode {
    __attributes: Record<string, string>;
    constructor(tag: HeadingTagType, key?: NodeKey, attributes?: Record<string, string>);
    static getType(): string;
    static clone(node: CustomHeadingNode): CustomHeadingNode;
    static importDOM(): DOMConversionMap;
    static importJSON(serializedNode: SerializedCustomHeadingNode): CustomHeadingNode;
    exportJSON(): SerializedCustomHeadingNode;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: this, dom: HTMLElement, config: EditorConfig): boolean;
    applyAttributesToDOM(dom: HTMLElement): void;
    setAttributes(attributes: Record<string, string>): void;
    getAttributes(): Record<string, string>;
}
export declare function $createCustomHeadingNode(tag: HeadingTagType, attributes?: Record<string, string>): CustomHeadingNode;
export declare function $isCustomHeadingNode(node: LexicalNode): node is CustomHeadingNode;
