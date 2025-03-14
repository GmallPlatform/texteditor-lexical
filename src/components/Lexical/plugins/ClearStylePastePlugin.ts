import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import {
  $createParagraphNode,
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  PASTE_COMMAND,
} from "lexical";
import { useEffect } from "react";

// Utility function to remove style attributes from HTML
function removeStyleAttributes(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove the 'style' attribute from all elements
  doc.body.querySelectorAll("*").forEach((node) => {
    node.removeAttribute("style");
  });

  return doc.body.innerHTML;
}

export default function ClearStylePastePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Register a command to handle the paste event
    return editor.registerCommand(
      PASTE_COMMAND,
      (event: ClipboardEvent | null): boolean => {
        if (event) {
          const clipboardData = event.clipboardData;
          if (clipboardData) {
            const html = clipboardData.getData("text/html");

            if (html) {
              // Sanitize the HTML
              const sanitizedHTML = removeStyleAttributes(html);

              editor.update(() => {
                const selection = $getSelection();

                if ($isRangeSelection(selection)) {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(
                    sanitizedHTML,
                    "text/html",
                  );

                  // Iterate through child nodes of the sanitized HTML body
                  doc.body.childNodes.forEach((child) => {
                    if (child.nodeType === Node.TEXT_NODE) {
                      // Insert plain text nodes
                      selection.insertText(child.textContent || "");
                    } else if (child.nodeType === Node.ELEMENT_NODE) {
                      // Create a new paragraph node for each element
                      const paragraphNode = $createParagraphNode();
                      paragraphNode.append(
                        $createTextNode(child.textContent || ""),
                      );
                      selection.insertNodes([paragraphNode]);
                    }
                  });
                }
              });

              return true;
            }
          }
        }

        // Return false to allow Lexical's default handler to process the paste
        return false;
      },
      1, // Priority of the command
    );
  }, [editor]);

  return null;
}
