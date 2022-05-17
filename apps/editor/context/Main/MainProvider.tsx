import {
  Dispatch,
  useState,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

export type EditorState = "clean" | "dirty";

export interface MainContextProps {
  editorState: EditorState;
  editorContent: string;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
  setEditorContent: Dispatch<SetStateAction<string>>;
}

const MainContext = createContext<undefined | MainContextProps>(undefined);

type MainProviderSignature = (props: PropsWithChildren<{}>) => JSX.Element;
const MainProvider: MainProviderSignature = ({ children }) => {
  const [editorState, setEditorState] = useState<EditorState>("clean");
  const [editorContent, setEditorContent] = useState<string>("");
  const value = {
    editorState,
    editorContent,
    setEditorState,
    setEditorContent,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export { MainContext, MainProvider };
