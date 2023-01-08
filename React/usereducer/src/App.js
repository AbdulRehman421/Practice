import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';


function App() {
  const reducer = (state, action) => {
    if (action.type === 'add') {
      return state = state + 1;
    } else if (action.type === 'sub') {
      return state = state - 1;
    }

    return state
  }
  const [state, dispatch] = useReducer(reducer, 0)
  console.log(state)
  return (
    <div className="App">
      {state}
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'sub' })}>sub</button>

    </div>
  );
}

export default App;
