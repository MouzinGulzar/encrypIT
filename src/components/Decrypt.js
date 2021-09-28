import React, { useState } from "react";

export default function Decrypt(props) {
  let decArr = [];
  let decrypted;
  let check =
    decArr.includes("0") ||
    decArr.includes("1") ||
    decArr.includes("2") ||
    decArr.includes("3") ||
    decArr.includes("4") ||
    decArr.includes("5") ||
    decArr.includes("6") ||
    decArr.includes("7") ||
    decArr.includes("8") ||
    decArr.includes("9") ||
    decArr.includes("o") ||
    decArr.includes("j") ||
    decArr.includes("g") ||
    decArr.includes("p") ||
    decArr.includes("m") ||
    decArr.includes("t") ||
    decArr.includes("v") ||
    decArr.includes("k") ||
    decArr.includes("n") ||
    decArr.includes("y") ||
    decArr.includes("i") ||
    decArr.includes("q") ||
    decArr.includes("w") ||
    decArr.includes("h") ||
    decArr.includes("r") ||
    decArr.includes("u") ||
    decArr.includes("x") ||
    decArr.includes("l") ||
    decArr.includes("s") ||
    decArr.includes("z");

  const [encText, setEncText] = useState("");
  const [key, setKey] = useState("");
  const [decText, setDecText] = useState("");

  const handleEncOnChange = (event) => {
    setEncText(event.target.value);
  };

  const handleKeyOnChange = (event) => {
    if (event.target.value.toUpperCase() !== event.target.value.toLowerCase()) {
      props.showAlert("Key can't be a Letter", "danger");
    } else if (
      (event.target.value >= "!" && event.target.value <= "/") ||
      (event.target.value >= ":" && event.target.value <= "@") ||
      (event.target.value >= "[" && event.target.value <= "`") ||
      (event.target.value >= "{" && event.target.value <= "~")
    ) {
      props.showAlert("Key can't be a Special Characters", "danger");
    } else {
      setKey(event.target.value);
    }
  };

  const checkIfDecryptable = () => {
    if (check) {
      setDecText(decrypted);
      props.showAlert("Decrypted Succesfully", "success");
    } else {
      props.showAlert("Text you want to decrypt is not encrypted", "danger");
    }
  };
  
  const handleDecOnChange = (event) => {
    setDecText(event.target.value);
  };
  
  const decrypt = (string, k) => {
    string = encText;
    k = key;

    string = string.replace(/g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, ".");
    
    decArr = string.split(".");

    for (let i = 0; i < string.length; i++) {
      decArr[i] = parseInt(decArr[i], 16) / props.constant[i % 26] / k;
      decArr[i] = String.fromCharCode(decArr[i]);
    }
    
    decArr = decArr.filter((el) => el !== "\u0000");
    decrypted = decArr.join("");
    
    if (k <= 0) {
      props.showAlert("Please Use a Valid Key", "danger");
    } else {
      setDecText(decrypted);
      props.showAlert("Decrypted Succesfully", "success");
    }

    if (decrypted.length === 0) {
      props.showAlert("Text you want to decrypt is not encrypted", "danger");
    }
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setEncText(text);
    props.showAlert("Text pasted", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(decText);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleReset = () => {
    let empty = "";
    setEncText(empty);
    setKey(empty);
    setDecText(empty);
    props.showAlert("All fields Reseted", "success");
  };

  return (
    <div>
      <div className="container">
        <div className="d-grid gap-2 mt-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handlePaste}
          >
            Paste from Clipboard
          </button>
        </div>
        <textarea
          className="form-control my-3"
          id="encrypted-text"
          rows="5"
          onChange={handleEncOnChange}
          value={encText}
          placeholder="Enter text to Decrypt"
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
            disabled={encText.length === 0 || key.length === 0}
            className="btn btn-dark"
            type="button"
            onClick={decrypt}
          >
            Decrypt
          </button>
          <button
            disabled={encText.length === 0 || decText.length === 0}
            className="btn btn-success"
            type="button"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            disabled={
              encText.length === 0 && key.length === 0 && decText.length === 0
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
            id="decrypted-text"
            rows="5"
            onChange={handleDecOnChange}
            value={decText.length === 0 ? "Decrypt text to see it" : decText}
            disabled={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
}