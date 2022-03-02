import React, { useState, useEffect } from 'react';
import Act1 from './Act1';
import Act2 from './Act2';
import Act3 from './Act3';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  
  
  return (
    <div className="App">
       <button onClick={()=> setShow(!show)}>Show </button>
      {show && <Act1 /> }
       
       {/* <Act2 /> 
      <button onClick={()=> setShow(!show)}>Show size</button>
      {show && <Act3 />}  */}
      
      
    </div>
  );
}

export default App;


