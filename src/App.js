import React, { useState } from 'react';
import Header from './comp/Header';
import Quote from './comp/Quote';
import Comparison from './comp/Comparison';
import Footer from './comp/Footer';
import './App.css';


function App() {
  const [display, setDisplay] = useState(true)

  const toggelDisplay = () => {
    setDisplay(!display)
  }
  return (
    <div className="overflow-hidden">
      <Header toggelDisplay={toggelDisplay} />
      { display ? <Quote toggelDisplay={toggelDisplay} /> : null}
      <Comparison />
      <Footer />
    </div>

  );
}

export default App;
