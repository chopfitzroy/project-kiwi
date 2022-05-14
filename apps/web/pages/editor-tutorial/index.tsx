import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { readFileSync } from "fs";
import path from "path";
import { InferGetStaticPropsType } from "next";

export type EditorTutorialProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

type EditorTutorialSignature = (props: EditorTutorialProps) => JSX.Element;
const EditorTutorial: EditorTutorialSignature = ({ content }) => {
  return (
    <div className="prose max-w-xl p-4 m-auto">
      <MDXRemote {...content} />
    </div>
  );
};

const getStaticProps = async () => {
  const editorTutorialPath = path.resolve(
    process.cwd(),
    "data/editor-tutorial.mdx"
  );
  const editorTutorial = readFileSync(editorTutorialPath, "utf8");

  const content = await serialize(editorTutorial);
  return { props: { content } };
};

export { getStaticProps };
export default EditorTutorial;
