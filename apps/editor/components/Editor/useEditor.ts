import { useDebounce } from "usehooks-ts";
import { useMain } from "../../context/Main/useMain";
import { useEffect, Dispatch, SetStateAction, useState, useMemo } from "react";
import { fetchEditorContent, updateEditorContent } from "./utilities";

type SaveState = "saved" | "saving";

export interface EditorProps {
  preContent: string;
}

interface UseEditor {
  editorContent: string;
  setEditorContent: Dispatch<SetStateAction<string>>;
  showSaveIndicator: boolean;
}

type UseEditorSignature = (props: EditorProps) => UseEditor;
const useEditor: UseEditorSignature = ({ preContent }) => {
  const [saveState, setSaveState] = useState<SaveState>("saved");

  const { editorState, editorContent, setEditorContent, setEditorState } =
    useMain();

  const debouncedEditorContent = useDebounce<string>(editorContent, 2000);

  const showSaveIndicator = useMemo<boolean>(() => {
    return saveState === "saving";
  }, [saveState]);

  useEffect(() => {
    // This works fine, but any more interactions and will move to XState
    setSaveState("saving");
  }, [debouncedEditorContent]);

  useEffect(() => {
    if (editorState === "dirty") {
      return;
    }

    (async () => {
      const pastContent = await fetchEditorContent();
      const newContent = pastContent !== null ? pastContent : preContent;
      setEditorState("dirty");
      setEditorContent(newContent);
    })();
  }, [preContent, editorState, setEditorState, setEditorContent]);

  useEffect(() => {
    if (saveState === "saved") {
      return;
    }

    if (editorState === "clean") {
      return;
    }

    (async () => {
      await updateEditorContent(editorContent);
      setSaveState("saved");
    })();
  }, [saveState, editorState]);

  return {
    editorContent,
    setEditorContent,
    showSaveIndicator,
  };
};

export { useEditor };
