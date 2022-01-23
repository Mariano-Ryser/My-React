import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      
     <div className='container-eje'>
     <h1 className="title">Hola aqui</h1>
          <br></br>
          <p className="p">Donde estaremos probando los Hooks de React
          el primero es el UseState()</p>
          <br></br>
      <p>You clicked {count} times</p>
        <br></br>
         <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
