import './ColorPicker.css';
import { useState } from "react";

export const ColorPicker = () => {
  const [ color, setColor ] = useState('White');
  const handleChange = () => {
    const inputElem = document.getElementById('my-color-picker');
    const color = inputElem.value;
    setColor(color);
    document.querySelector('body').style.backgroundColor = color;
  }
  return (
    <div className="color-picker">
      <p className="color-picker-command">Choose a color using the color input below:</p>
      <input type="color" id="my-color-picker"
      className='color-input' onChange={handleChange} />
    </div>
  );
}