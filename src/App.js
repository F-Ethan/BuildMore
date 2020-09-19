import React, { useState } from 'react';
import Landing from './comp/Landing';
import Home from './comp/Home';
import './App.css';
// import tirangle from './imgs/tirangle.svg'
function App() {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Landing />
      <Home />
    </div>

  );
}

export default App;
