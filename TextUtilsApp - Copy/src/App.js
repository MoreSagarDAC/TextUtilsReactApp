import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Alert alert={alert} />
        
        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
