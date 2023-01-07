import './App.css';
import { createContext, useState } from 'react';
import CompA from './components/CompA';
const Theme = createContext()
function App() {

  const [dark, setDark] = useState(true)
  const [items, setItems] = useState([{ apple: 1, samsung: 2 }])
  console.log(dark)
  return (
    <Theme.Provider value={{ dark, items, setDark }}>
      <div className="App">
        <h1>
          App
        </h1>
        <CompA />
      </div>
    </Theme.Provider>
  );

}

export default App;
export { Theme };

