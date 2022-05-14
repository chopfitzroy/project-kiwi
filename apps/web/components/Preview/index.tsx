import { Skill } from "@discretize/gw2-ui-new";
import { usePreview, PreviewProps } from "./usePreview";

const components = { Skill };

type PreviewSignature = (props: PreviewProps) => JSX.Element;
const Preview: PreviewSignature = (props) => {
  const { Component } = usePreview(props);
  if (Component === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          role="alert"
          className="max-w-md p-4 m-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10"
        >
          <p className="leading-loose">
            Something wen't wrong when displaying the preview, this is likely
            caused by a syntax error.
          </p>
          <p className="leading-loose">
            Please double check your code and fix any mistakes.
          </p>
          <p className="leading-loose">
            Think it's a bug? Please{" "}
            <a
              className="font-bold"
              href="https://github.com/chopfitzroy/project-kiwi/issues/new/choose"
              target="_blank"
            >
              open a ticket
            </a>
            .
          </p>
        </div>
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
