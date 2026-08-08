// import { paste } from '@testing-library/user-event/dist/paste';
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  };


  const handleOnChange = (e) => {
    setText(e.target.value);
    // props.showAlert("Typing text","success");

  };

  const handleClear = (e) => {
    setText("");
    props.showAlert("Cleared text","success");

  };
  
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");

  }

  const removeExtraSpaces = () => {
    const t = text.trim().replace(/\s+/g, ' ');
    setText(t);
    props.showAlert("Extra spaces removed","success");

  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style = {{color: props.mode === 'light'? 'black' : 'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white' : 'grey', color: props.mode === 'light'? 'black' : 'white'}} id="my-box" rows="3" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-danger my-2 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-success my-2 mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-warning my-2 mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-secondary my-2 mx-2" onClick={removeExtraSpaces}>Remove Extra spaces</button>



      </div>
    </div>
    <div className="container my-2" style = {{color: props.mode === 'light'? 'black' : 'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length)} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
