import React, { createContext, useState } from "react";
import { useOnKeyDown } from "../../hooks/keydown";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  useOnKeyDown(() => setToasts([]), 'Escape');

  function addToast({ variant, message }) {
    const newToasts = toasts;
    newToasts.push({
      id: Math.random(),
      variant,
      message,
    });
    setToasts(newToasts);
  }

  function removeToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
