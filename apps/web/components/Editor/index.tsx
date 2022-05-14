import CodeMirror, { EditorView } from "@uiw/react-codemirror";

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

type EditorSignature = (props: EditorProps) => JSX.Element;
const Editor: EditorSignature = (props) => {
  const { editorContent, setEditorContent } = useEditor(props);
  return (
    <CodeMirror
      theme={theme}
      value={editorContent}
      onChange={setEditorContent}
      extensions={[markdown({ base: markdownLanguage })]}
    />
  );
};

export { Editor };
