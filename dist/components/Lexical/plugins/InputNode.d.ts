import { DOMConversionMap, NodeKey, SerializedLexicalNode, EditorConfig, ElementNode, SerializedElementNode } from 'lexical';
export interface SerializedInputNode extends SerializedElementNode<SerializedLexicalNode> {
    type: "input";
    version: 1;
    attributes: Record<string, string>;
}
export declare class InputNode extends ElementNode {
    private __attributes;
    constructor(key?: NodeKey);
    static getType(): string;
    static clone(node: InputNode): InputNode;
    static importDOM(): DOMConversionMap | null;
    createDOM(_: EditorConfig): HTMLElement;
    updateDOM(prevNode: InputNode, dom: HTMLElement): boolean;
    static importJSON(serializedNode: SerializedInputNode): InputNode;
    exportJSON(): SerializedInputNode;
    setAttributesFromElement(element: HTMLElement): void;
    applyAttributesToDOM(dom: HTMLElement): void;
    setAttributes(attributes: Record<string, string>): void;
    getAttributes(): Record<string, string>;
    isInline(): boolean;
}
export declare function $createInputNode(): InputNode;
export declare function $isInputNode(node: ElementNode | null | undefined): node is InputNode;
