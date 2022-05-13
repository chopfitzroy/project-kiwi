import * as provider from "@mdx-js/react";
import * as runtime from "react/jsx-runtime.js";

import { useMemo } from "react";
import { MDXContent } from "mdx/types";
import { evaluateSync } from "@mdx-js/mdx";

export interface PreviewProps {
  content: string;
}

interface UsePreview {
  Component?: MDXContent;
}

type UsePreviewSignature = (props: PreviewProps) => UsePreview;
const usePreview: UsePreviewSignature = ({ content }) => {
  const Component = useMemo(() => {
    try {
      // - TODO Post issue about this
      // @ts-ignore
      const { default: Preview } = evaluateSync(content, {
        ...provider,
        ...runtime,
      });

      return Preview;
    } catch (err) {
      console.warn(`Failed to compile MDX, likely a syntax error`, err);
      return undefined;
    }
  }, [content]);

  return {
    Component,
  };
};

export { usePreview };
