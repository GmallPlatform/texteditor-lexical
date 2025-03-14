import {
  HeadingNode,
  HeadingTagType,
  SerializedHeadingNode,
} from "@lexical/rich-text";
import { DOMConversionMap, EditorConfig, LexicalNode, NodeKey } from "lexical";
export interface SerializedCustomHeadingNode extends SerializedHeadingNode {
  type: "custom-heading";
  version: 1;
  tag: HeadingTagType;
  attributes: Record<string, string>;
}
export class CustomHeadingNode extends HeadingNode {
  __attributes: Record<string, string>;

  constructor(
    tag: HeadingTagType,
    key?: NodeKey,
    attributes: Record<string, string> = {},
  ) {
    super(tag, key);
    this.__attributes = attributes;
  }

  static getType(): string {
    return "custom-heading";
  }

  static clone(node: CustomHeadingNode): CustomHeadingNode {
    return new CustomHeadingNode(node.__tag, node.__key, node.__attributes);
  }

  static importDOM(): DOMConversionMap {
    return {
      h1: () => ({
        conversion: (domNode: HTMLElement) => {
          const attributes: Record<string, string> = {};
          Array.from(domNode.attributes).forEach(({ name, value }) => {
            attributes[name] = value;
          });
          const node = new CustomHeadingNode("h1", undefined, attributes);
          return { node };
        },
        priority: 2,
      }),
      h2: () => ({
        conversion: (domNode: HTMLElement) => {
          const attributes: Record<string, string> = {};
          Array.from(domNode.attributes).forEach(({ name, value }) => {
            attributes[name] = value;
          });
          const node = new CustomHeadingNode("h2", undefined, attributes);
          return { node };
        },
        priority: 2,
      }),
      h3: () => ({
        conversion: (domNode: HTMLElement) => {
          const attributes: Record<string, string> = {};
          Array.from(domNode.attributes).forEach(({ name, value }) => {
            attributes[name] = value;
          });
          const node = new CustomHeadingNode("h3", undefined, attributes);
          return { node };
        },
        priority: 2,
      }),
      h4: () => ({
        conversion: (domNode: HTMLElement) => {
          const attributes: Record<string, string> = {};
          Array.from(domNode.attributes).forEach(({ name, value }) => {
            attributes[name] = value;
          });
          const node = new CustomHeadingNode("h4", undefined, attributes);
          return { node };
        },
        priority: 2,
      }),
    };
  }

  static importJSON(
    serializedNode: SerializedCustomHeadingNode,
  ): CustomHeadingNode {
    const { tag, attributes } = serializedNode;
    return new CustomHeadingNode(tag, undefined, attributes);
  }
  exportJSON(): SerializedCustomHeadingNode {
    return {
      ...super.exportJSON(),
      type: "custom-heading",
      version: 1,
      attributes: this.__attributes,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    this.applyAttributesToDOM(dom);
    return dom;
  }

  updateDOM(prevNode: this, dom: HTMLElement, config: EditorConfig): boolean {
    if (
      JSON.stringify(this.__attributes) !==
      JSON.stringify(prevNode.__attributes)
    ) {
      this.applyAttributesToDOM(dom);
    }
    return super.updateDOM(prevNode, dom, config); // Теперь передаём корректный тип
  }

  applyAttributesToDOM(dom: HTMLElement) {
    Object.entries(this.__attributes).forEach(([key, value]) => {
      dom.setAttribute(key, value);
    });
  }

  setAttributes(attributes: Record<string, string>) {
    const writableNode = this.getWritable();
    writableNode.__attributes = attributes;
  }

  getAttributes(): Record<string, string> {
    return this.__attributes;
  }
}

export function $createCustomHeadingNode(
  tag: HeadingTagType,
  attributes: Record<string, string> = {},
): CustomHeadingNode {
  return new CustomHeadingNode(tag, undefined, attributes);
}

export function $isCustomHeadingNode(
  node: LexicalNode,
): node is CustomHeadingNode {
  return node instanceof CustomHeadingNode;
}
