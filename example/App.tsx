import { useCallback, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import LexicalEditor from "../src/components/Lexical/LexicalEditor";
import { transformHTML } from "./utils";

function App() {
  const [initContent, setInitContent] = useState(
    "<p>Хропіння (ронхопатія) – це серйозна проблема, що впливає на здоров'я. Воно може супроводжуватися апное – зупинками дихання уві сні, які знижують рівень кисню в крові. Це призводить до втоми, головного болю, погіршення пам'яті, підвищеного тиску та серцево-судинних ускладнень, таких як інфаркт та інсульт. Ефективним методом лікування є лазерна увулопластика. Процедура покращує прохідність дихальних шляхів, усуває хропіння та нормалізує дихання під час сну. Вона проходить амбулаторно, не потребує тривалого відновлення, а вже через 1–2 години після втручання пацієнт може йти додому.</p>",
  );
  const [loadingAutosave, setLoadingAutosave] = useState(false);
  const [currentContent, setCurrrentContent] = useState("");

  const handleContentChange = useCallback(
    (newContent: string) => {
      setCurrrentContent(newContent);
      setLoadingAutosave(true);
      setTimeout(() => {
        setLoadingAutosave(false);
      }, 2000);
    },

    [setCurrrentContent],
  );

  const [disableEditor] = useState(false);

  const onSomeAction = (action: string) => {
    setInitContent(transformHTML(currentContent, action));
    // here you can save your content to the server or do something else
    // and use setLoadingAutosave to show the autosave indicator
    setLoadingAutosave(true);
    setTimeout(() => {
      setLoadingAutosave(false);
    }, 2000);
  };

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <LexicalEditor
          initialContent={initContent}
          onContentChange={handleContentChange}
          readOnly={disableEditor}
          isAutosaving={loadingAutosave}
          addButtonForToolbar={[
            <button
              key="uppercase"
              className="toolbar-item"
              onClick={() => onSomeAction("uppercase")}
            >
              Uppercase
            </button>,
            <button
              key="uppercase"
              className="toolbar-item"
              onClick={() => onSomeAction("rtl")}
            >
              Revers
            </button>,
          ]}
          placeholder="Type something here"
        />
      </div>
    </div>
  );
}

export default App;
