import {
  DOMConversionMap,
  NodeKey,
  SerializedLexicalNode,
  EditorConfig,
  ElementNode,
} from "lexical";
import { SerializedElementNode } from "lexical";

export interface SerializedInputNode
  extends SerializedElementNode<SerializedLexicalNode> {
  type: "input";
  version: 1;
  attributes: Record<string, string>;
}

export class InputNode extends ElementNode {
  private __attributes: Record<string, string>;

  constructor(key?: NodeKey) {
    super(key);
    this.__attributes = {};
  }

  static getType(): string {
    return "input";
  }

  static clone(node: InputNode): InputNode {
    const clonedNode = new InputNode(node.__key);
    clonedNode.setAttributes(node.getAttributes());
    return clonedNode;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      input: () => ({
        conversion: (element: HTMLElement) => {
          const node = new InputNode();
          const attributes = Array.from(element.attributes).reduce(
            (acc, attr) => ({ ...acc, [attr.name]: attr.value }),
            {},
          );
          node.setAttributes(attributes);
          return { node };
        },
        priority: 2,
      }),
    };
  }

  createDOM(_: EditorConfig): HTMLElement {
    const dom = document.createElement("input");
    this.applyAttributesToDOM(dom);
    return dom;
  }

  updateDOM(prevNode: InputNode, dom: HTMLElement): boolean {
    const hasDifferentAttributes = Object.entries(this.__attributes).some(
      ([key, value]) => prevNode.__attributes[key] !== value,
    );

    if (hasDifferentAttributes) {
      this.applyAttributesToDOM(dom);
      return true;
    }
    return false;
  }

  static importJSON(serializedNode: SerializedInputNode): InputNode {
    const node = new InputNode();
    node.setAttributes(serializedNode.attributes || {});
    return node;
  }

  exportJSON(): SerializedInputNode {
    return {
      ...super.exportJSON(),
      type: "input",
      version: 1,
      attributes: this.__attributes,
    };
  }

  setAttributesFromElement(element: HTMLElement) {
    const attributes: Record<string, string> = {};
    Array.from(element.attributes).forEach(({ name, value }) => {
      attributes[name] = value;
    });
    this.__attributes = attributes;
  }

  applyAttributesToDOM(dom: HTMLElement) {
    const attributes = this.getAttributes();
    Object.entries(attributes).forEach(([key, value]) => {
      if (value != null) {
        dom.setAttribute(key, value);
      }
    });
  }

  setAttributes(attributes: Record<string, string>) {
    this.__attributes = attributes;
  }

  getAttributes(): Record<string, string> {
    return this.__attributes;
  }

  isInline(): boolean {
    return true; // `input` -  inline-element.
  }
}

export function $createInputNode(): InputNode {
  return new InputNode();
}

export function $isInputNode(
  node: ElementNode | null | undefined,
): node is InputNode {
  return node instanceof InputNode;
}
