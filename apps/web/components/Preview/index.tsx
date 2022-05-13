import { Skill } from "@discretize/gw2-ui-new";
import { usePreview, PreviewProps } from "./usePreview";

const components = { Skill };

type PreviewSignature = (props: PreviewProps) => JSX.Element;
const Preview: PreviewSignature = (props) => {
  const { Component } = usePreview(props);
  if (Component === undefined) {
    return (
      <div>
        <p>Something wen't wrong when displaying the preview, it's likely this is a syntax error.</p>
        <p>Please double check your code and fix any mistakes.</p>
        <p>Think it's a bug? Please <a href="#">Open a ticket</a>.</p>
      </div>
    );
  }
  return (
    <div className="prose max-w-none">
      <Component components={components} />
    </div>
  );
};

export { Preview };
