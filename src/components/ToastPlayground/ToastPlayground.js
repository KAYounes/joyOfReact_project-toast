import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { useTabalize } from "../../Utils/logger";
import { formReducer } from "./reducers";
import { INITIAL_FORM_STATE, VARIANT_OPTIONS } from "./constants";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
  const [form, dispatchFormReducer] = React.useReducer(
    formReducer,
    INITIAL_FORM_STATE
  );

  const toastRef = React.useRef();

  const formTable = useTabalize(form);

  const variantsRadioDOM = VARIANT_OPTIONS.map(function (variant) {
    return (
      <label htmlFor={`variant-${variant}`} key={variant}>
        <input
          id={`variant-${variant}`}
          type="radio"
          name="variant"
          value={variant}
          checked={form.variant === variant}
          onChange={function () {
            dispatchFormReducer({ type: "change-variant", to: variant });
          }}
        />
        {variant}
      </label>
    );
  });

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* <Toast message={form.message} variant={form.variant} ref={toastRef}/> */}
      <ToastShelf>
        <Toast message={form.message} variant={form.variant} />
      </ToastShelf>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={form.message}
              onChange={function ({ target: { value } }) {
                dispatchFormReducer({
                  type: "change-message",
                  to: value,
                });
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {variantsRadioDOM}
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputWrapper}`}>
            <Button
              disabled={!validateForm()}
              onClick={() => toastRef.current.show()}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  function validateForm() {
    if (form.message?.length < 3) return false;
    if (form.variant === null) return false;
    return true;
  }
}

export default ToastPlayground;
