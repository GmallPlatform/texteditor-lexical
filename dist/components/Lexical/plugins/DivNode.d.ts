import { DOMConversionMap, NodeKey, SerializedLexicalNode, EditorConfig, ElementNode, SerializedElementNode } from 'lexical';
export interface SerializedDivNode extends SerializedElementNode<SerializedLexicalNode> {
    type: "div";
    version: 1;
    attributes: Record<string, string>;
}
export declare class DivNode extends ElementNode {
    private __attributes;
    constructor(key?: NodeKey);
    static getType(): string;
    static clone(node: DivNode): DivNode;
    static importDOM(): DOMConversionMap | null;
    createDOM(_: EditorConfig): HTMLElement;
    updateDOM(prevNode: DivNode, dom: HTMLElement): boolean;
    static importJSON(serializedNode: SerializedDivNode): DivNode;
    exportJSON(): SerializedDivNode;
    setAttributesFromElement(element: HTMLElement): void;
    applyAttributesToDOM(dom: HTMLElement): void;
    setAttributes(attributes: Record<string, string>): void;
    getAttributes(): Record<string, string>;
    isInline(): boolean;
}
export declare function $createDivNode(): DivNode;
export declare function $isDivNode(node: ElementNode | null | undefined): node is DivNode;
