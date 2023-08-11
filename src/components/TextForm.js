import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase! ", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase!", "success")
  };
  const handleIsClick = () => {
    let replaced = text.replace("fuck", "Love");
    setText(replaced);
    props.showalert("Replaced fuck with love!", "success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard!", "success")
  };

  const toggleClear = () => {
    setText("");
    props.showalert("Text cleared", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color: props.mode==='light'?'black':'white'}} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} style={{backgroundColor: props.mode==='light'?'white':'#2c2c2c', color: props.mode==='light'?'black':'white'}}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2  mx-2 " onClick={handleIsClick}>
          Replace
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={toggleClear}>
          Clear
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} <b>words</b> and {text.length}
          <b>characters</b>{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        {/* <p><b>The no of "is" used in the text are:</b>{newarr}</p> */}
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the above textarea to Preview'}</p>
      </div>
    </>
  );
}
