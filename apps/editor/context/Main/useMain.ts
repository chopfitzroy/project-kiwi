import { useContext } from "react";
import { MainContext, MainContextProps } from "./MainProvider";

type UseMainSignature = () => MainContextProps;
const useMain: UseMainSignature = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error(`'useMain' must be used within a 'MainContext'`);
  }
  return context;
};

export { useMain };
