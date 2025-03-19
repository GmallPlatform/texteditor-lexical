// ReadOnlyPlugin.js
import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export function ReadOnlyPlugin({ readOnly }: { readOnly: boolean }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.setEditable(!readOnly);

    return () => {
      editor.setEditable(true); // Восстанавливаем редактирование при размонтировании
    };
  }, [editor, readOnly]);

  return null;
}

export default ReadOnlyPlugin;
