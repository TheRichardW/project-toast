import React, { createContext, useEffect, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const escapeKeyListener = window.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') {
        setToasts([]);
      }
    });
    return () => window.removeEventListener(escapeKeyListener);
  }, [])

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
