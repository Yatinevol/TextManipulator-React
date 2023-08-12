import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2c2c";
      showalert("Dark Mode has been enabled", "success");
      document.title = "TextManipulator - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
      document.title = "TextManipulator - Light Mode";
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
      
      <Routes>
      <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<TextForm
          showalert={showalert}
          heading="Enter the text below to analyze"
          mode={mode}
        />}>
        </Route>
          
      </Routes>

        
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
