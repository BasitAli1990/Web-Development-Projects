// import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000
  )
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      // document.title = 'Textutils dark mode';
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
  }
  ;
  return (
    <>
      <Navbar title="TextUtils" aboutText = "About TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}  />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert = {showAlert} />
      </div>
        {/* <About /> */}
    </>
  );
}

export default App;
