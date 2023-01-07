import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  let [input, setInput] = useState("")
  const Counter = useRef(0) // Increse Counter without Re rendering
  const PrevState = useRef('') // Store Previous State
  const inputField = useRef()
  useEffect(() => {
    Counter.current = Counter.current + 1
    PrevState.current = input
  })
  const HandleChange = (e) => {
    setInput(e.target.value)
    inputField.current.style.color = 'white'
    inputField.current.style.backgroundColor = 'black'
  }
  const handleClick = () => {
    inputField.current.style.display = 'none'

  }
  return (
    <div className="App">
      <h1>Renderd {Counter.current} times</h1>
      <h2>PrevState :{PrevState.current}</h2>
      <input ref={inputField} type="text" onChange={HandleChange} />
      <button onClick={handleClick}>
        Hide Me
      </button>
    </div>
  );
}

export default App;
