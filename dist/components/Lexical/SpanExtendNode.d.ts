import { DecoratorNode, DOMConversionMap, EditorConfig, LexicalEditor, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
/**
 * Serialized format of FieldNode when exported
 */
type FieldNodeSerialized = Spread<{
    type: "field-node";
    version: 1;
    text?: string;
    attributes?: Record<string, string>;
    style?: string;
}, SerializedLexicalNode>;
export declare class FieldNode extends DecoratorNode<JSX.Element | null> {
    __attributes: Record<string, string>;
    __text: string;
    __style: string | undefined;
    static getType(): string;
    static clone(node: FieldNode): FieldNode;
    constructor(attributes?: Record<string, string>, text?: string, style?: string, // <== Добавляем style
    key?: NodeKey);
    static importDOM(): DOMConversionMap;
    static importJSON(serializedNode: FieldNodeSerialized): FieldNode;
    exportJSON(): FieldNodeSerialized;
    createDOM(_config: EditorConfig, editor: LexicalEditor): HTMLElement;
    updateDOM(prevNode: FieldNode, dom: HTMLElement): boolean;
    decorate(_editor: LexicalEditor, _config: EditorConfig): JSX.Element | null;
}
export {};
