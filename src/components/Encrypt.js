import React, { useState } from "react";

export default function Encrypt(props) {
  let encStr = [];
  var encrypted = "";

  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [encText, setEncText] = useState("");

  const encrypt = (string, k) => {
    string = text;
    k = key;
    for (let i = 0; i < string.length; i++) {
      encStr[2 * i] = (
        string.charCodeAt(i) *
        props.constant[i % 26] *
        k
      ).toString(16);
    }
    let index = 0;
    for (let i = 0; i < string.length - 1; i++) {
      encStr[2 * i + 1] = props.joint[index];
      index++;
    }

    encrypted = encStr.join("");
    encrypted = encrypted.toString();

    if (k <= 0) {
      props.showAlert("Please Use a Valid Key", "danger");
    } else {
      setEncText(encrypted);
      props.showAlert("Encrypted Successfully", "success");
    }
  };

  const handleTextOnChange = (event) => {
    setText(event.target.value);
  };
  const handleEncTextOnChange = (event) => {
    setEncText(event.target.value);
  };
  const handleKeyOnChange = (event) => {
    if (event.target.value.length === 1) {
      props.showAlert(
        "Please remember the key. Otherwise you won't be able to decrypt it",
        "primary"
      );
    }

    if (event.target.value.toUpperCase() !== event.target.value.toLowerCase()) {
      props.showAlert("Key can't include Letters", "danger");
    } else if (
      (event.target.value >= "!" && event.target.value <= "/") ||
      (event.target.value >= ":" && event.target.value <= "@") ||
      (event.target.value >= "[" && event.target.value <= "`") ||
      (event.target.value >= "{" && event.target.value <= "~")
    ) {
      props.showAlert("Key can't include Special Characters", "danger");
    } else {
      setKey(event.target.value);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(encText);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleReset = () => {
    let empty = "";
    setText(empty);
    setKey(empty);
    setEncText(empty);
    props.showAlert("All fields Reseted", "success");
  };

  return (
    <div>
      <div className="container">
        <textarea
          className="form-control my-3"
          id="text-to-encrypt"
          rows="5"
          onChange={handleTextOnChange}
          value={text}
          placeholder="Enter text to Encrypt"
        ></textarea>
        <div className="form-group mb-4">
          <input
            type="password"
            name="password"
            className="form-control"
            id="key"
            value={key}
            onChange={handleKeyOnChange}
            placeholder="Key"
            pattern={/[^0-9]/gi}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            disabled={text.length === 0 || key.length === 0}
            className="btn btn-dark"
            type="button"
            onClick={encrypt}
          >
            Encrypt
          </button>
          <button
            disabled={text.length === 0 || encText.length === 0}
            className="btn btn-success"
            type="button"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            disabled={
              text.length === 0 && key.length === 0 && encText.length === 0
            }
            className="btn btn-danger"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <textarea
            style={{ backgroundColor: "white" }}
            className="form-control my-3 mb-4"
            id="encrypted-text"
            rows="5"
            onChange={handleEncTextOnChange}
            value={encText.length === 0 ? "Encrypt text to see it" : encText}
            disabled={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
