import { useState, useCallback } from "react";

type ToggleExpandedSignature = () => void;

interface UseNavbar {
  expanded: boolean;
  toggleExpanded: ToggleExpandedSignature;
}

type UseNavbarSignature = () => UseNavbar;
const useNavbar: UseNavbarSignature = () => {
  // TODO
  // - Pull from and write to localstorage
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback<ToggleExpandedSignature>(() => {
    setExpanded((current) => !current);
  }, []);

  return {
    expanded,
    toggleExpanded,
  };
};

export { useNavbar };
