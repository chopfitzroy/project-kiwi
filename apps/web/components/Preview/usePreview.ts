import * as provider from "@mdx-js/react";
import * as runtime from "react/jsx-runtime.js";

import { useMemo } from "react";
import { MDXContent } from "mdx/types";
import { evaluateSync } from "@mdx-js/mdx";
import { useMain } from "../../context/Main/useMain";

interface UsePreview {
  Component?: MDXContent;
}

type UsePreviewSignature = () => UsePreview;
const usePreview: UsePreviewSignature = () => {
  const { editorContent } = useMain();
  const Component = useMemo(() => {
    try {
      // - TODO Post issue about this
      // @ts-ignore
      const { default: Preview } = evaluateSync(editorContent, {
        ...provider,
        ...runtime,
      });

      return Preview;
    } catch (err) {
      console.warn(`Failed to compile MDX, likely a syntax error`, err);
      return undefined;
    }
  }, [editorContent]);

  return {
    Component,
  };
};

export { usePreview };
