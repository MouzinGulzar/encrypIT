import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

const CONSTANT = [
  0x5cff, 0x95b1, 0xb5c2, 0xe6bb, 0xd3bf, 0x6fdb, 0x6e7e, 0x5653, 0x87b7,
  0xd76f, 0x7fc1, 0xa744, 0x8888, 0xb66a, 0xfac6, 0xc55f, 0xfe3a, 0x5587,
  0xae42, 0xe2a0, 0xe550, 0x9ea6, 0xd6c0, 0x49b6, 0xf2b1, 0x0a51,
];

const joint = [
  "o",
  "j",
  "g",
  "p",
  "m",
  "t",
  "v",
  "k",
  "n",
  "y",
  "i",
  "q",
  "w",
  "h",
  "r",
  "u",
  "x",
  "l",
  "s",
  "z",
];

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Alert alert={alert} />
            <Encrypt constant={CONSTANT} joint={joint} showAlert={showAlert} />
          </Route>
          <Route exact path="/decrypt">
            <Alert alert={alert} />
            <Decrypt constant={CONSTANT} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
