import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Sub } from './features/counter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const Value = useSelector((state) => state.countersss)
  console.log(Value);
  return (
    <div className="App">
      <h1>
        {Value}
      </h1>
      <div>
        <button onClick={() => dispatch(Add())}>Add</button>
        <button onClick={() => dispatch(Sub())}>Sub</button>
        {/* <button>Sub</button> */}
      </div>
    </div>
  );
}

export default App;
