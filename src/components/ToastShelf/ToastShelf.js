import React from "react";

import Portal from "../Portal/Portal";
import Toast from "../Toast";
import { ToastShelfContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";
import useListenToKey from "../../hooks/useListenToKey";

function ToastShelf() {
  const { toastShelf, removeToast, clearToasts } = React.useContext(ToastShelfContext);
  useListenToKey('Escape', clearToasts)

  const shelfDOM = toastShelf.map(function ({ message, variant, key }, index) {
    return (
      <li className={styles.toastWrapper} key={key}>
        <Toast variant={variant} handleHide={() => removeToast(index)}>{message}</Toast>
      </li>
    );
  });

  React.useEffect(function(){

  }, [])

  return (
    <Portal>
      <ol className={styles.wrapper}>{shelfDOM}</ol>
    </Portal>
  );
}

export default ToastShelf;
