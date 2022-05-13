import { Dispatch, SetStateAction, useState } from "react";

interface UseMain {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

type UseMainSignature = () => UseMain;
const useMain: UseMainSignature = () => {
  const [content, setContent] = useState<string>("");

  return {
    content,
    setContent,
  };
};

export { useMain };
