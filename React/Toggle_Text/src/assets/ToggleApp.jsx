import { useState, useEffect } from 'react';
import './ToggleApp.css';

export const ToggleApp = () => {

  const [isVisible, setIsVisible ] = useState(false);

  const handleToggleVisiblity = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    handleToggleVisiblity();
  }, []);

  return (
    <div id='toggle-container'>
      <button onClick={handleToggleVisiblity} id='toggle-button'>Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};