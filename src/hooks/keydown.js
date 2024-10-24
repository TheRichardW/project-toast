import { useEffect } from "react";

export const useOnKeyDown = (onKeyDown, key = "Escape") => {
  useEffect(() => {
    const escapeKeyListener = window.addEventListener("keydown", (event) => {
      if (event.key === key) {
        onKeyDown();
      }
    });
    
    return () => window.removeEventListener("keydown", escapeKeyListener);
  }, [key, onKeyDown]);
};
