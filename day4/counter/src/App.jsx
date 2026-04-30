import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  function Counter(type){
    if(type === 'INC'){
      setCount((prev)=>prev+1)
    }else if(type === 'DEC'){
      setCount((prev)=>prev-1)
    }else{
      setCount(0)
    }
  }

  return (
    <div className='counter'>
      <p>{count}</p>
      <button onClick={()=> Counter('INC')} className='btn'>Increment</button>
      <button onClick={()=> Counter('DEC')} className='btn'>Decrement</button>
      <button onClick={()=> Counter('Reset')} className='btn'>Reset</button>
    </div>
  )
}

export default App
