import React, { useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { v4 as uuidv4 } from "uuid";
import { $generateHtmlFromNodes } from "@lexical/html";
import ToolbarPlugin from "./ToolbarPlugin";
import ErrorBoundary from "./ErrorBoundary";
import "./EditLexical.css";
import "./css/button.css";

import { InitializeEditorWithContentPlugin } from "./plugins/InitializeEditorWithContentPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import ReadOnlyPlugin from "./plugins/ReadOnlyPlugin";
import { ToolbarContext } from "./context/ToolbarContext";
import { InsertPlugin } from "./insertPlugin";
import { CheckListPlugin } from "./plugins/LexicalCheckListPlugin";
import DragDropPaste from "./plugins/DragDropPastePlugin";
import ImagesPlugin from "./plugins/ImagesPlugin";
import InlineImagePlugin from "./plugins/InlineImagePlugin";
import ClearStylePastePlugin from "./plugins/ClearStylePastePlugin";
import { initialConfig } from "./initialConfig";
export interface LexicalEditorProps {
  initialContent?: string;
  onContentChange?: (d: string) => void;
  readOnly?: boolean;
  isAutosaving?: boolean;
  toolbarHide?: boolean;
  hideBorder?: boolean;
  addButtonForToolbar?: JSX.Element[];
  placeholder?: string;
  onFocusChange?: (isFocused: boolean) => void;
  onHoverChange?: (isHovered: boolean) => void;
}
const EditLexical = ({
  initialContent = "",
  onContentChange,
  readOnly = false,
  isAutosaving,
  toolbarHide,
  hideBorder,
  addButtonForToolbar,
  placeholder,
  onFocusChange,
  onHoverChange,
}: LexicalEditorProps) => {
  const namespaceRef = useRef(`LexicalEditor-${uuidv4()}`);
  const [initContent, setInitContent] = React.useState("");
  useEffect(() => {
    setInitContent(initialContent);
  }, [initialContent]);
  const handleFocus = () => {
    onFocusChange?.(true);
  };

  const handleBlur = () => {
    onFocusChange?.(false);
  };

  const handleMouseEnter = () => {
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    onHoverChange?.(false);
  };
  return (
    <>
      <div className="templates-editor-main-container">
        <div
          className={`lexical-editor-wrapper ${hideBorder ? "hide-border" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ToolbarContext>
            <LexicalComposer
              initialConfig={{
                ...initialConfig,
                editable: !readOnly,
                namespace: namespaceRef.current,
              }}
            >
              <div
                className={`editor-container   ${readOnly ? "readonly" : ""}`}
              >
                <InsertPlugin />
                {!toolbarHide && (
                  <ToolbarPlugin
                    isAutosaving={isAutosaving}
                    isDisabled={readOnly}
                    addButtonForToolbar={addButtonForToolbar}
                  />
                )}
                <div className="editor-inner">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable
                        className="editor-input"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    }
                    placeholder={
                      <div className="editor-placeholder">
                        {placeholder ? placeholder : "Type something..."}
                      </div>
                    }
                    ErrorBoundary={ErrorBoundary}
                  />

                  <HistoryPlugin />
                  <DragDropPaste />
                  <ImagesPlugin />
                  <InlineImagePlugin />
                  <ListPlugin />
                  <CheckListPlugin />
                  <LinkPlugin />
                  <ClearStylePastePlugin />
                  <OnChangePlugin
                    onChange={(editorState, editor) => {
                      editorState.read(() => {
                        const htmlString = $generateHtmlFromNodes(editor);
                        if (onContentChange) {
                          onContentChange(htmlString);
                        }
                      });
                    }}
                  />
                  <InitializeEditorWithContentPlugin
                    initialContent={initContent}
                  />
                  <ReadOnlyPlugin readOnly={readOnly} />
                </div>
              </div>
            </LexicalComposer>
          </ToolbarContext>
        </div>
      </div>
    </>
  );
};

export default EditLexical;
