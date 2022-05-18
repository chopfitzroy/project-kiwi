import CodeMirror, { EditorView } from "@uiw/react-codemirror";

import { Save } from "@icon-park/react";
import { useEditor, EditorProps } from "./useEditor";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

const theme = EditorView.theme({
  "&": {
    height: "100vh",
    padding: "0.6rem",
    fontSize: "1.2rem",
  },
  ".cm-gutters": {
    display: "none",
  },
});

type EditorSignature = (props: EditorProps) => null | JSX.Element;
const Editor: EditorSignature = (props) => {
  const { editorContent, setEditorContent, showSaveIndicator } =
    useEditor(props);
  return (
    <div className="relative">
      <CodeMirror
        theme={theme}
        value={editorContent}
        onChange={setEditorContent}
        extensions={[markdown({ base: markdownLanguage })]}
      />

      <div
        className={`absolute right-4 bottom-4 p-2 transition-opacity ease-in-out duration-300 bg-slate-800 rounded pointer-events-none ${
          showSaveIndicator ? "opacity-100" : "opacity-0"
        }`}
      >
        <Save size={24} className="text-slate-200" />
      </div>
    </div>
  );
};

export { Editor };
