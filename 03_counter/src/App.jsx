import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter , setCounter] = useState(15);

  const addvalue =()=>{
      setCounter(Counter+1);
      setCounter(Counter+1);
      setCounter(Counter+1);
      setCounter(Counter+1);
  }

  const removevalue =()=>{
    if(Counter>0)
    {
      setCounter(Counter-1);
    }
  }

  return (
    <>
      <div>
        <h1>Chai Aur code</h1>
        <h2>counter value:{Counter}</h2>
        <button onClick={addvalue}>addvalue</button>
        <br/>
        <button onClick={removevalue}>removevalue</button>
      </div>
    </> 
  )
}

export default App
