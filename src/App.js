import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
 const toggleMode = () =>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#2c2c2c';
    showalert("Dark Mode has been enabled", "success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showalert("Light Mode has been enabled", "success")
  }
 }
  return (
    <>
      <Navbar title="TextwithYatin" mode={mode} toggleMode={toggleMode}  />

      <Alert alert={alert}/>

      <div className="container">
      <TextForm showalert={showalert} heading="Enter the text below to analyze" mode={mode}/>
      </div>
      {/* <About/> */}

    </>
  );
}

export default App;
