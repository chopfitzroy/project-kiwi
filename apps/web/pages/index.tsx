import CodeMirror, { EditorView } from "@uiw/react-codemirror";

import { useMain } from "./useMain";
import { Preview } from "../components/Preview";
import { SplitPane } from "react-collapse-pane";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

// TODO
// - Find somewhere more appropiate to put this...?
const theme = EditorView.theme({
  "&": {
    height: '100vh',
    padding: "0.6rem",
    fontSize: "1.2rem",
  },
  ".cm-gutters": {
    display: "none",
  },
});

const Main = () => {
  const { content, setContent } = useMain();
  return (
    <div className="flex">
      <div className="w-14 h-screen border-r">Test</div>
      <div className="relative w-full h-screen">
        {/* TODO */}
        {/* - Eventually replace this with something more maintained / performant */}
        <SplitPane split="vertical">
          <div>
            <CodeMirror
              theme={theme}
              value={content}
              onChange={setContent}
              extensions={[markdown({ base: markdownLanguage })]}
            />
          </div>
          <div className="p-4">
            <Preview content={content} />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default Main;
