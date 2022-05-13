import * as provider from "@mdx-js/react";
import * as runtime from "react/jsx-runtime.js";

import { useMemo, useState } from "react";
import { evaluateSync } from "@mdx-js/mdx";

const usePreview = () => {
  const [content, setContent] = useState<string>(`# hi
    <Skill id={5548} />
    yay`);

  const Preview = useMemo(() => {
    // - TODO Post issue about this
    // @ts-ignore
    const { default: Component } = evaluateSync(content, {
      ...provider,
      ...runtime,
    });

    return Component;
  }, [content]);

  return {
    content,
    Preview,
    setContent,
  };
};

export { usePreview };
