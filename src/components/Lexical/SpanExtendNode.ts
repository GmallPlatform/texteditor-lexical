import {
  DecoratorNode,
  DOMConversion,
  DOMConversionMap,
  DOMConversionOutput,
  EditorConfig,
  LexicalEditor,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from "lexical";

/**
 * Serialized format of FieldNode when exported
 */
type FieldNodeSerialized = Spread<
  {
    type: "field-node";
    version: 1;
    text?: string;
    attributes?: Record<string, string>;
    style?: string; // <== Добавляем поддержку style
  },
  SerializedLexicalNode
>;

export class FieldNode extends DecoratorNode<JSX.Element | null> {
  __attributes: Record<string, string>;
  __text: string;
  __style: string | undefined; // <== Хранение стилей

  // ====== 1) Node Type ======
  static getType(): string {
    return "field-node";
  }

  // ====== 2) Cloning ======
  static clone(node: FieldNode): FieldNode {
    return new FieldNode(
      node.__attributes,
      node.__text,
      node.__style,
      node.__key,
    );
  }

  // ====== 3) Constructor ======
  constructor(
    attributes?: Record<string, string>,
    text?: string,
    style?: string, // <== Добавляем style
    key?: NodeKey,
  ) {
    super(key);
    this.__attributes = attributes || {};
    this.__text = text || "";
    this.__style = style;
  }

  // ====== 4) Import from DOM ======
  static importDOM(): DOMConversionMap {
    return {
      span: (domNode: HTMLElement): DOMConversion<HTMLElement> | null => {
        if (
          (domNode.classList.contains("dragged-field") &&
            domNode.classList.contains("not-merged")) ||
          domNode.classList.contains("noValue") ||
          domNode.classList.contains("noValueOutput") ||
          (domNode.style && domNode.style.color)
        ) {
          return {
            conversion: (node: HTMLElement): DOMConversionOutput => {
              const attrMap: Record<string, string> = {};
              for (const { name, value } of Array.from(node.attributes)) {
                attrMap[name] = value;
              }
              const textContent = node.textContent || "";
              const style = node.getAttribute("style") || ""; // <== Извлекаем style
              return { node: new FieldNode(attrMap, textContent, style) };
            },
            priority: 2,
          };
        }
        return null;
      },
    };
  }

  // ====== 5) Import from JSON ======
  static importJSON(serializedNode: FieldNodeSerialized): FieldNode {
    const { attributes, text, style } = serializedNode;
    return new FieldNode(attributes, text, style);
  }

  // ====== 6) Export to JSON ======
  exportJSON(): FieldNodeSerialized {
    return {
      ...super.exportJSON(),
      type: "field-node",
      version: 1,
      attributes: this.__attributes,
      text: this.__text,
      style: this.__style, // <== Экспортируем style
    };
  }

  // ====== 7) Create DOM Element ======
  createDOM(_config: EditorConfig, editor: LexicalEditor): HTMLElement {
    const dom = document.createElement("span");

    // Применяем все атрибуты
    for (const [attr, value] of Object.entries(this.__attributes)) {
      dom.setAttribute(attr, value);
    }

    // Устанавливаем стили
    if (this.__style) {
      dom.setAttribute("style", this.__style);
    }

    dom.textContent = this.__text;

    if (
      dom.classList.contains("dragged-field") &&
      dom.classList.contains("not-merged")
    ) {
      dom.contentEditable = "false";
      dom.tabIndex = -1;
      dom.setAttribute("data-lexical-field", "true");

      dom.addEventListener("click", (event: MouseEvent) => {
        if (!editor.isEditable()) {
          return;
        }

        const { clientX, target } = event;
        const targetElement = target as HTMLElement;
        const rect = targetElement.getBoundingClientRect();
        const deleteButtonStartX = rect.right - 20;

        if (clientX >= deleteButtonStartX && clientX <= rect.right) {
          event.stopPropagation();
          editor.update(() => {
            const latestNode = this.getLatest();
            if (latestNode) {
              latestNode.remove();
            }
          });
        }
      });
    }

    return dom;
  }

  // ====== 8) Update DOM on Changes ======
  updateDOM(prevNode: FieldNode, dom: HTMLElement): boolean {
    if (this.__text !== prevNode.__text) {
      dom.textContent = this.__text;
    }
    if (this.__attributes !== prevNode.__attributes) {
      for (const [attr, value] of Object.entries(this.__attributes)) {
        dom.setAttribute(attr, value);
      }
    }
    if (this.__style !== prevNode.__style) {
      dom.setAttribute("style", this.__style || "");
    }
    return false;
  }
  // exportDOM(options: any = {}): DOMExportOutput {
  //   const element = super.exportDOM(options).element;
  //   if (this.__style) {
  //     element.style.cssText = this.__style;
  //   }
  //   return { element };
  // }

  // ====== 9) Render via React (Decorate) ======
  decorate(_editor: LexicalEditor, _config: EditorConfig): JSX.Element | null {
    return null;
  }
}
