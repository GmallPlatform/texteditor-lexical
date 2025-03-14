import { $getRoot, $getSelection, $isRangeSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { $generateNodesFromDOM } from "@lexical/html";

export function InsertPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const addBlockInEditor = (e: CustomEvent) => {
      if (e.detail && typeof e.detail === "string" && editor) {
        const parser = new DOMParser();
        const dom = parser.parseFromString(e.detail, "text/html");

        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            const focusNode = selection.focus.getNode();

            if (
              !anchorNode ||
              !focusNode ||
              !anchorNode.getParent() ||
              !focusNode.getParent()
            ) {
              console.warn(
                "Invalid selection detected. Falling back to root insertion.",
              );
              const nodes = $generateNodesFromDOM(editor, dom);
              const root = $getRoot();
              nodes.forEach((node) => root.append(node));
              return;
            }

            // Valid selection: Proceed with insertion
            const nodes = $generateNodesFromDOM(editor, dom);
            selection.insertNodes(nodes);
          } else {
            console.warn(
              "No valid range selection. Falling back to root insertion.",
            );
            const nodes = $generateNodesFromDOM(editor, dom);
            const root = $getRoot();
            nodes.forEach((node) => root.append(node));
          }
        });
      }
    };

    window.addEventListener(
      "addBlockInEditor",
      addBlockInEditor as EventListener,
    );
    return () => {
      window.removeEventListener(
        "addBlockInEditor",
        addBlockInEditor as EventListener,
      );
    };
  }, [editor]);

  return null;
}
