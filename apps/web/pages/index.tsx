import path from "path";

import { readFileSync } from "fs";
import { Editor } from "../components/Editor";
import { InferGetStaticPropsType } from "next";
import { Preview } from "../components/Preview";
import { SplitPane } from "react-collapse-pane";

export type MainProps = InferGetStaticPropsType<typeof getStaticProps>;

type MainSignature = (props: MainProps) => JSX.Element;
const Main: MainSignature = ({ preContent }) => {
  return (
    // TODO
    // - Eventually replace `SplitPane` with something more maintained / performant
    <SplitPane split="vertical">
      <div>
        <Editor preContent={preContent} />
      </div>
      <div className="p-4">
        <Preview />
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
