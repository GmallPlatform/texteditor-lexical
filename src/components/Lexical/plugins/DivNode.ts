import {
  DOMConversionMap,
  NodeKey,
  SerializedLexicalNode,
  EditorConfig,
  ElementNode,
} from "lexical";
import { SerializedElementNode } from "lexical";

export interface SerializedDivNode
  extends SerializedElementNode<SerializedLexicalNode> {
  type: "div";
  version: 1;
  attributes: Record<string, string>;
}

export class DivNode extends ElementNode {
  private __attributes: Record<string, string>;

  constructor(key?: NodeKey) {
    super(key);
    this.__attributes = {};
  }

  static getType(): string {
    return "div";
  }

  static clone(node: DivNode): DivNode {
    const clonedNode = new DivNode(node.__key);
    clonedNode.setAttributes(node.getAttributes());
    return clonedNode;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      //   div: () => ({
      //     conversion: (element: HTMLElement) => {
      //       console.log("Importing <div>: ", element);
      //       const node = new DivNode();
      //       node.setAttributesFromElement(element);
      //       return { node };
      //     },
      //     priority: 1,
      //   }),
      div: () => ({
        conversion: (element: HTMLElement) => {
          //console.log("Importing <div>: ", element);
          const node = new DivNode();
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
    //console.log("createDOM");
    const dom = document.createElement("div");
    this.applyAttributesToDOM(dom);
    return dom;
  }

  updateDOM(prevNode: DivNode, dom: HTMLElement): boolean {
    const hasDifferentAttributes = Object.entries(this.__attributes).some(
      ([key, value]) => prevNode.__attributes[key] !== value,
    );

    if (hasDifferentAttributes) {
      this.applyAttributesToDOM(dom);
      return true;
    }
    return false;
  }

  static importJSON(serializedNode: SerializedDivNode): DivNode {
    console.log("importJSON");
    const node = new DivNode();
    node.setAttributes(serializedNode.attributes || {});
    return node;
  }

  exportJSON(): SerializedDivNode {
    return {
      ...super.exportJSON(),
      type: "div",
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
    return false;
  }
}

// function convertDivElement(domNode: Node): DOMConversionOutput {
//   let node = new DivNode();

//   if (domNode instanceof HTMLElement) {
//     node.setAttributesFromElement(domNode);
//   }

//   return {
//     node,
//   };
// }

export function $createDivNode(): DivNode {
  return new DivNode();
}

export function $isDivNode(
  node: ElementNode | null | undefined,
): node is DivNode {
  return node instanceof DivNode;
}
