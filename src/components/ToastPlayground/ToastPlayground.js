import React, { useContext, useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const { addToast } = useContext(ToastContext);

  function addToastLocal(e) {
    e.preventDefault();

    addToast({ variant, message });

    setVariant("notice");
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper}>
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((variantOption, index) => {
            const labelFor = `variant-${variantOption}`;
            return (
              <div
                key={index}
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <label htmlFor={labelFor}>
                  <input
                    id={labelFor}
                    type="radio"
                    name="variant"
                    value={variantOption}
                    checked={variantOption === variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {variantOption}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={(e) => addToastLocal(e)}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
