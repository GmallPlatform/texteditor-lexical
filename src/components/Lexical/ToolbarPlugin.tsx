import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister,
} from "@lexical/utils";
import "./ToolbarPlugin.css";

import {
  $getSelection,
  $isRangeSelection,
  $isElementNode,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  CAN_UNDO_COMMAND,
  CAN_REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  LexicalEditor,
  $isRootOrShadowRoot,
  NodeKey,
} from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";
import { $isHeadingNode } from "@lexical/rich-text";
import AutosaveIndicator from "../AutosaveIndicator/AutosaveIndicator";
import { RedoIcon } from "./icons/RedoIcon";
import { UndoIcon } from "./icons/UndoIcon";
import { BoldIcon } from "./icons/BoldIcon";
import { ItalicIcon } from "./icons/ItalicIcon";
import { UnderlineIcon } from "./icons/UnderlineIcon";
import { StrikethroughIcon } from "./icons/StrikethroughIcon";
import { LeftAlignIcon } from "./icons/LeftAlignIcon";
import { CenterAlignIcon } from "./icons/CenterAlignIcon";
import { RightAlignIcon } from "./icons/RightAlignIcon";
import { JustifyAlignIcon } from "./icons/JustifyAlignIcon";
import DropdownColorPicker from "./ui/DropdownColorPicker";
import { useToolbarState } from "./context/ToolbarContext";
import {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $patchStyleText,
} from "@lexical/selection";
import { ColorPickerIcon } from "./icons/ColorPickerIcon";
import { BGColorPickerIcon } from "./icons/BGColorPickerIcon";
import {
  formatBulletList,
  formatCheckList,
  formatHeading,
  formatNumberedList,
  formatParagraph,
} from "./utils/utils";
import { $isListNode, ListNode } from "@lexical/list";

import DropDown, { DropDownItem } from "./ui/DropDown";
import { getSelectedNode } from "./utils/getSelectedNode";
import { $isLinkNode } from "@lexical/link";
import { $isTableNode, $isTableSelection } from "@lexical/table";
import { $isCodeNode, CODE_LANGUAGE_MAP } from "@lexical/code";
import useModal from "./hook/useModal";
import { InsertImageDialog, InsertImagePayload } from "./plugins/ImagesPlugin";
import { FileImageIcon } from "./icons/FileImage";
import { blockTypeToBlockName } from "./constants/constants";
import React from "react";
const LowPriority = 1;

function Divider() {
  return <div className="divider" />;
}

export default function ToolbarPlugin({
  isAutosaving,
  isDisabled,
  InsertImageFromListDialogBody,
  addButtonForToolbar,
  uploadImage,
}: {
  isAutosaving?: boolean;
  isDisabled?: boolean;
  InsertImageFromListDialogBody?: React.ComponentType<{
    onClick: (payload: InsertImagePayload) => void;
    onCancel: () => void;
  }>;
  addButtonForToolbar?: JSX.Element[];
  uploadImage?: boolean;
}) {
  const [modal, showModal] = useModal();
  const [, setSelectedElementKey] = useState<NodeKey | null>(null);
  const { toolbarState, updateToolbarState } = useToolbarState();
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      updateToolbarState("isImageCaption", false);
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      updateToolbarState("isRTL", $isParentElementRTL(selection));
      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      const isLink = $isLinkNode(parent) || $isLinkNode(node);
      updateToolbarState("isLink", isLink);
      const tableNode = $findMatchingParent(node, $isTableNode);
      if ($isTableNode(tableNode)) {
        updateToolbarState("rootType", "table");
      } else {
        updateToolbarState("rootType", "root");
      }
      element = parent;
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);

        if ($isListNode(element) || element?.__type === "listitem") {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode
          );
          const type = (parentList && parentList.getListType()) || "paragraph";

          updateToolbarState("blockType", type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element?.getType();
          if (type && type in blockTypeToBlockName) {
            updateToolbarState(
              "blockType",
              type as keyof typeof blockTypeToBlockName
            );
          }
          if ($isCodeNode(element)) {
            const language =
              element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
            updateToolbarState(
              "codeLanguage",
              language ? CODE_LANGUAGE_MAP[language] || language : ""
            );
            return;
          }
        }
      }
      // Handle buttons
      updateToolbarState(
        "fontColor",
        $getSelectionStyleValueForProperty(selection, "color", "#000")
      );
      updateToolbarState(
        "bgColor",
        $getSelectionStyleValueForProperty(
          selection,
          "background-color",
          "#fff"
        )
      );
      updateToolbarState(
        "fontFamily",
        $getSelectionStyleValueForProperty(selection, "font-family", "Arial")
      );
      let matchingParent;
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      // If matchingParent is a valid node, pass it's format type
      updateToolbarState(
        "elementFormat",
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || "left"
      );
    }
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      // Update text format
      updateToolbarState("isBold", selection.hasFormat("bold"));
      updateToolbarState("isItalic", selection.hasFormat("italic"));
      updateToolbarState("isUnderline", selection.hasFormat("underline"));
      updateToolbarState(
        "isStrikethrough",
        selection.hasFormat("strikethrough")
      );
      updateToolbarState("isSubscript", selection.hasFormat("subscript"));
      updateToolbarState("isSuperscript", selection.hasFormat("superscript"));
      updateToolbarState("isCode", selection.hasFormat("code"));
      updateToolbarState(
        "fontSize",
        $getSelectionStyleValueForProperty(selection, "font-size", "15px")
      );
      // updateToolbarState("isLowercase", selection.hasFormat("lowercase"));
      // updateToolbarState("isUppercase", selection.hasFormat("uppercase"));
      // updateToolbarState("isCapitalize", selection.hasFormat("capitalize"));
    }
  }, [editor, updateToolbarState]);
  //console.log(toolbarState);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, $updateToolbar]);

  const applyStyleText = useCallback(
    (styles: Record<string, string>, skipHistoryStack?: boolean) => {
      editor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        skipHistoryStack ? { tag: "historic" } : {}
      );
    },
    [editor]
  );

  const onFontColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const onBgColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ "background-color": value }, skipHistoryStack);
    },
    [applyStyleText]
  );
  // container for dropdown
  const toolbarContainerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    toolbarContainerRef.current = document.querySelector(
      ".templates-editor-main-container"
    );
  }, []);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    command: any,
    type?: string
  ) => {
    event.preventDefault(); // Предотвращает отправку формы
    event.stopPropagation(); // Предотвращает всплытие события

    editor.dispatchCommand(command, type);
  };
  return (
    <div
      className={`toolbar-templates-lexical ${isDisabled ? "toolbar-disabled" : ""}`}
      ref={toolbarRef}
    >
      <div className="toolbar-templates-lexical-left">
        <button
          disabled={!canUndo || isDisabled}
          onClick={(e) => handleClick(e, UNDO_COMMAND)}
          className="toolbar-item spaced"
          aria-label="Undo"
        >
          <UndoIcon />
        </button>
        <button
          disabled={!canRedo || isDisabled}
          onClick={(e) => handleClick(e, REDO_COMMAND)}
          className="toolbar-item"
          aria-label="Redo"
        >
          <RedoIcon />
        </button>
        <Divider />

        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_TEXT_COMMAND, "bold")}
          className={
            "toolbar-item spaced " + (toolbarState.isBold ? "active" : "")
          }
          aria-label="Format Bold"
        >
          <BoldIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_TEXT_COMMAND, "italic")}
          className={
            "toolbar-item spaced " + (toolbarState.isItalic ? "active" : "")
          }
          aria-label="Format Italics"
        >
          <ItalicIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_TEXT_COMMAND, "underline")}
          className={
            "toolbar-item spaced " + (toolbarState.isUnderline ? "active" : "")
          }
          aria-label="Format Underline"
        >
          <UnderlineIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_TEXT_COMMAND, "strikethrough")}
          className={
            "toolbar-item spaced " +
            (toolbarState.isStrikethrough ? "active" : "")
          }
          aria-label="Format Strikethrough"
        >
          <StrikethroughIcon />
        </button>
        <Divider />

        <BlockFormatDropDown
          blockType={toolbarState.blockType}
          editor={editor}
          container={toolbarContainerRef.current}
        />

        <Divider />
        <DropdownColorPicker
          disabled={false}
          buttonClassName="toolbar-item color-picker"
          icon={<ColorPickerIcon />}
          buttonAriaLabel="Formatting text color"
          buttonIconClassName="icon font-color"
          color={toolbarState.fontColor}
          onChange={onFontColorSelect}
          title="text color"
          container={toolbarContainerRef.current}
        />

        <DropdownColorPicker
          disabled={false}
          buttonClassName="toolbar-item color-picker"
          icon={<BGColorPickerIcon />}
          buttonAriaLabel="Formatting background color"
          buttonIconClassName="icon bg-color"
          color={toolbarState.bgColor}
          onChange={onBgColorSelect}
          title="bg color"
          container={toolbarContainerRef.current}
        />
        <Divider />

        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_ELEMENT_COMMAND, "left")}
          className="toolbar-item spaced"
          aria-label="Left Align"
        >
          <LeftAlignIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_ELEMENT_COMMAND, "center")}
          className="toolbar-item spaced"
          aria-label="Center Align"
        >
          <CenterAlignIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_ELEMENT_COMMAND, "right")}
          className="toolbar-item spaced"
          aria-label="Right Align"
        >
          <RightAlignIcon />
        </button>
        <button
          disabled={isDisabled}
          onClick={(e) => handleClick(e, FORMAT_ELEMENT_COMMAND, "justify")}
          className="toolbar-item"
          aria-label="Justify Align"
        >
          <JustifyAlignIcon />
        </button>
        {uploadImage && (
          <button
            disabled={isDisabled}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              showModal("Insert Image", (onClose) => (
                <InsertImageDialog
                  activeEditor={editor}
                  onClose={onClose}
                  InsertImageFromListDialogBody={InsertImageFromListDialogBody}
                />
              ));
            }}
            className="toolbar-item"
            aria-label="Justify Align"
          >
            <FileImageIcon />
          </button>
        )}
        {addButtonForToolbar?.map((Button, index) => (
          <React.Fragment key={index}>{Button}</React.Fragment>
        ))}
      </div>
      <div className="toolbar-templates-lexical-right">
        <AutosaveIndicator
          isLoading={isAutosaving === undefined ? false : isAutosaving}
        />
      </div>
      {modal}
    </div>
  );
}
function dropDownActiveClass(active: boolean) {
  if (active) {
    return "active toolbar-item";
  } else {
    return "toolbar-item";
  }
}
function BlockFormatDropDown({
  editor,
  blockType,

  disabled = false,
  container,
}: {
  blockType: keyof typeof blockTypeToBlockName;
  editor: LexicalEditor;
  disabled?: boolean;
  container?: HTMLElement | null;
}): JSX.Element {
  return (
    <DropDown
      disabled={disabled}
      buttonClassName="toolbar-item block-controls"
      buttonIconClassName={"icon block-type " + blockType}
      buttonLabel={blockTypeToBlockName[blockType]}
      buttonAriaLabel="Formatting options for text style"
      container={container}
    >
      <DropDownItem
        className={
          "item wide " + dropDownActiveClass(blockType === "paragraph")
        }
        onClick={() => formatParagraph(editor)}
      >
        <div className="icon-text-container">
          {/* <i className="icon paragraph" /> */}
          <span className="text">Normal</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.NORMAL}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "h1")}
        onClick={() => formatHeading(editor, blockType, "h1")}
      >
        <div className="icon-text-container">
          {/* <i className="icon h1" /> */}
          <span className="text">Heading 1</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.HEADING1}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "h2")}
        onClick={() => formatHeading(editor, blockType, "h2")}
      >
        <div className="icon-text-container">
          {/* <i className="icon h2" /> */}
          <span className="text">Heading 2</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.HEADING2}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "h3")}
        onClick={() => formatHeading(editor, blockType, "h3")}
      >
        <div className="icon-text-container">
          {/* <i className="icon h3" /> */}
          <span className="text">Heading 3</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.HEADING3}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "bullet")}
        onClick={() => formatBulletList(editor, blockType)}
      >
        <div className="icon-text-container">
          {/* <i className="icon bullet-list" /> */}
          <span className="text">Bullet List</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.BULLET_LIST}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "number")}
        onClick={() => formatNumberedList(editor, blockType)}
      >
        <div className="icon-text-container">
          {/* <i className="icon numbered-list" /> */}
          <span className="text">Numbered List</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.NUMBERED_LIST}</span> */}
      </DropDownItem>
      <DropDownItem
        className={"item wide " + dropDownActiveClass(blockType === "check")}
        onClick={() => {
          console.log("blockType!!", blockType);
          formatCheckList(editor, blockType);
        }}
      >
        <div className="icon-text-container">
          {/* <i className="icon check-list" /> */}
          <span className="text">Check List</span>
        </div>
        {/* <span className="shortcut">{SHORTCUTS.CHECK_LIST}</span> */}
      </DropDownItem>
    </DropDown>
  );
}
