// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextBox } from './components/TextBox';
import { useState } from 'react';
// import { About } from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  let toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';

      // color = 'white';
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} ghgMode={toggleMode} />
      <div className="container my-3">
        <TextBox />
      </div>
    </>
  );
}

export default App;
