import React from "react";

import Button from "../Button";

import useToast from "../../hooks/useToast";
import styles from "./ToastPlayground.module.css";
import { INITIAL_FORM_STATE, VARIANT_OPTIONS } from "./constants";
import { formReducer } from "./reducers";
import useEvent from "../../hooks/useEvent";

function ToastPlayground() {
  const [form, dispatchFormReducer] = React.useReducer(
    formReducer,
    INITIAL_FORM_STATE
  );

  const toast = useToast();

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

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
            <Button disabled={!validateForm()}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );

  function validateForm() {
    if (form.message?.length < 3) return false;
    if (form.variant === null) return false;
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    toast.show(form.message, form.variant);
  }
}

export default ToastPlayground;
