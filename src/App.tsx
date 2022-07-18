import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';


function App() {
  return (
    <div className='transition-all'>
      <Navbar />
      <Navbar2 />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
