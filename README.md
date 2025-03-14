# texteditor-lexical

## Overview

`texteditor-lexical` is a rich-text editor built on top of **Lexical**. It provides a customizable and lightweight solution for text editing with support for formatting, images, lists, and PDF generation. This editor is designed to be used inside a container with a defined height and will occupy the full width and height of the container.

A **rich-text editor** built on top of [Lexical](https://lexical.dev/). This editor provides:

- A customizable and lightweight solution for text editing.
- Built-in formatting (bold, italic, underline, etc.).
- Images (inline insertion, drag & drop, and more).
- Lists and checklists.

> **Note**: This editor is designed to be used inside a container with a defined **height** (e.g., a flex container). It will automatically expand to fill the **full width and height** of its parent container.

## Installation

```sh
npm install texteditor-lexical
```

## Usage

### Import Module

```tsx
import "texteditor-lexical/dist/style.css";
import { LexicalEditor } from "texteditor-lexical";
```

### Basic Example

```tsx
import { useCallback, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import LexicalEditor from "@opie-software/template-editor";
import { transformHTML } from "./utils";
import { data } from "./data.ts";

function App() {
  const [initContent, setInitContent] = useState("first content");
  const [loadingAutosave, setLoadingAutosave] = useState(false);
  const [currentContent, setCurrrentContent] = useState("");
  const [dataFromForm, setDataFromForm] = useState(data);

  const handleContentChange = useCallback((newContent: string) => {
    setCurrrentContent(newContent);
    setLoadingAutosave(true);
    setTimeout(() => setLoadingAutosave(false), 2000);
  }, []);

  useEffect(() => {
    setDataFromForm(data);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <LexicalEditor
          initialContent={initContent}
          onContentChange={handleContentChange}
          toolbarHide={false}
          hideBorder={false}
        />
      </div>
    </div>
  );
}

export default App;
```

### Styling Requirements

The editor should be placed inside a container with a defined height to properly render. It will automatically expand to fill the full width and height of the container.

```css
.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  padding: 20px;
}
.main-container * {
  box-sizing: border-box;
}
```

## Props

| Prop              | Type                                   | Default     | Description                                                                              |
| ----------------- | -------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `initialContent`  | `string` (optional)                    | `""`        | The initial HTML content of the editor. If not provided, the editor starts empty.        |
| `onContentChange` | `(content: string) => void` (optional) | `undefined` | Callback triggered every time the editor content updates, providing the current content. |
| `isAutosaving`    | `boolean`                              | `false`     | If `true`, shows an autosaving indicator.                                                |
| `toolbarHide`     | `boolean`                              | `false`     | If `true`, hides the editor toolbar.                                                     |
| `hideBorder`      | `boolean`                              | `false`     | If `true`, removes the editor border.                                                    |

|

### `toolbarHide` and `hideBorder` Functionality

- **`toolbarHide`**: If `true`, the editor's toolbar is hidden.
- **`hideBorder`**: If `true`, the editor's border is removed.

## Storybook

Storybook is included to demonstrate the editor's capabilities.

### Running Storybook

```sh
npm run storybook
```

## License

MIT License.
