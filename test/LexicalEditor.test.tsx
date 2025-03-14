import React from "react";
import { render, act } from "@testing-library/react";
import { LexicalEditor } from "../src";

describe("LexicalEditor", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(<LexicalEditor initialContent="" onContentChange={() => {}} />);
    });
  });
});
