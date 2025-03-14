import LexicalEditor from "./LexicalEditor";

export default {
  title: "Editor/LexicalEditor",
  component: LexicalEditor,
};

export const Default = {
  args: {
    initialContent: "Initial content",
    readOnly: false,
    isAutosaving: false,
  },
};

export const ReadOnly = {
  args: {
    initialContent: "Read only content",
    readOnly: true,
  },
};

export const AutosaveTrue = {
  args: {
    initialContent: "Initial content",
    readOnly: false,
    isAutosaving: true,
  },
};

export const WithUppercaseButton = {
  args: {
    initialContent: "Initial content",
    readOnly: false,
    isAutosaving: false,
    addButtonForToolbar: [
      <button
        key="uppercase"
        className="toolbar-item"
        onClick={() => alert("Uppercasing not implemented in this demo.")}
      >
        Uppercase
      </button>,
    ],
  },
};
