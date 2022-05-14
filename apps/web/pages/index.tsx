import path from "path";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";

import { readFileSync } from "fs";
import { useMain } from "./useMain";
import { InferGetStaticPropsType } from "next";
import { Preview } from "../components/Preview";
import { SplitPane } from "react-collapse-pane";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

export type MainProps = InferGetStaticPropsType<typeof getStaticProps>;

// TODO
// - Find somewhere more appropiate to put this...?
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

type MainSignature = (props: MainProps) => JSX.Element;
const Main: MainSignature = (props) => {
  const { content, setContent } = useMain(props);
  return (
    // TODO
    // - Eventually replace this with something more maintained / performant
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
  );
};

const getStaticProps = async () => {
  const preContentPath = path.resolve(process.cwd(), "data/pre-content.mdx");
  const preContent = readFileSync(preContentPath, "utf8");

  return { props: { preContent } };
};

export { getStaticProps };

export default Main;
