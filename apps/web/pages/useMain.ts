import { MainProps } from './'
import { Dispatch, SetStateAction, useState } from "react";

interface UseMain {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

type UseMainSignature = (props: MainProps) => UseMain;
const useMain: UseMainSignature = (props) => {
  // TODO
  // - Load from localstorage
  const [content, setContent] = useState<string>(props.preContent);

  return {
    content,
    setContent,
  };
};

export { useMain };
