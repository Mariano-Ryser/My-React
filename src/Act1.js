import React,  { useState }from 'react'

console.log("pre-render")
  
const Act1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='container'>
    <div>
      <p className="p"> Hooks de React
      el primero es el UseState()</p>
      <br></br>
      <p>You clicked {count} times</p>
       <br></br>
     <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
     <button className='button' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  </div>
 
  </div>
  )
}

export default Act1
