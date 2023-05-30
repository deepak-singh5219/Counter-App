import React, { useState } from 'react'


const App = () => {
  const [counter,setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter+1);
  }

  const decrementCount = () => {
    if(counter>0) setCounter(counter-1);
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <button onClick={incrementCount} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Increment
      </button>
      <div className="m-2 p-2 text-2xl text-white">
      {counter}
      </div>
      <button onClick={decrementCount} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Decrement
      </button>
    </div>
  )
}

export default App
