import { useEffect, useRef } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { $generateNodesFromDOM } from "@lexical/html";
import { prepareHtmlForLexical } from "../utils/textProcess";

export const InitializeEditorWithContentPlugin = ({
  initialContent,
}: {
  initialContent: string;
}) => {
  const [editor] = useLexicalComposerContext();
  const previousInitialContentRef = useRef<string | undefined>();

  useEffect(() => {
    previousInitialContentRef.current = initialContent;
    editor.update(() => {
      let cleanedContent = prepareHtmlForLexical(initialContent);
      const parser = new DOMParser();
      const dom = parser.parseFromString(cleanedContent, "text/html");
      const newDoc = document.implementation.createHTMLDocument();
      newDoc.body.innerHTML = dom.body
        ? dom.body.innerHTML
        : dom.documentElement.innerHTML;
      const nodes = $generateNodesFromDOM(editor, newDoc);
      const root = $getRoot();
      root.clear();
      nodes.forEach((node) => {
        root.append(node);
      });
      const firstChild = root.getFirstChild();
      if (firstChild) {
        firstChild.selectStart(); // Places the cursor at the start of the content
      }
    });
    // }
  }, [editor, initialContent]);

  return null;
};
