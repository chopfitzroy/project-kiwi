import { useMain } from "../../context/Main/useMain";
import { useEffect, Dispatch, SetStateAction } from "react";

export interface EditorProps {
  preContent: string;
}

interface UseEditor {
  editorContent: string;
  setEditorContent: Dispatch<SetStateAction<string>>;
}

type UseEditorSignature = (props: EditorProps) => UseEditor;
const useEditor: UseEditorSignature = ({ preContent }) => {
  const { editorState, editorContent, setEditorContent, setEditorState } =
    useMain();

  useEffect(() => {
    if (editorState !== "clean") {
      return;
    }
    // TODO
    // - Check if any existing state in localstorage
    setEditorState("dirty");
    setEditorContent(preContent);
  }, [preContent, editorState, setEditorState, setEditorContent]);

  return {
    editorContent,
    setEditorContent,
  };
};

export { useEditor };
