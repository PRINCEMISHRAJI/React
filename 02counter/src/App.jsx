import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const decrement = () =>{
    if(count <=0){
      setCount(0)
    }else{
      setCount(count-1);
    }
  }
  return (
    <>
     <div>
      <h1>Ankit Mishra Counter {count}</h1>
     </div>
     <button onClick ={() => setCount(count+1)}> Increment </button>
     <button onClick ={decrement}> Decrement </button>
    </>
  )
}

export default App
