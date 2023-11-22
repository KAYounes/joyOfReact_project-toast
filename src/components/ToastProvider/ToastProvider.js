import React from "react";

export const ToastShelfContext = React.createContext();

function ToastProvider({ children }) {
  const [toastShelf, setToastShelf] = React.useState([]);

  return (
    <ToastShelfContext.Provider value={{ toastShelf, addToast, removeToast, clearToasts }}>
      {children}
    </ToastShelfContext.Provider>
  );

  function addToast(message, variant) {
    setToastShelf([
      ...toastShelf,
      {
        message,
        variant,
        key: (new Date()).getTime()
      },
    ]);
  }

  function removeToast(index) {
    const prev = [...toastShelf]
    prev.splice(index, 1)
    setToastShelf(prev)
  }

  function clearToasts(index)
  {
    setToastShelf([])
  }
}

export default ToastProvider;
