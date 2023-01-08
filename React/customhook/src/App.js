import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';
function App() {
  const [data] = useFetch('https://cat-fact.herokuapp.com/facts')
  console.log(data)
  return (
    <div className="App">

      <>
        {data.map((fact, index) => (
          <p key={index}>
            {fact.text}
          </p>
        ))}
      </>
    </div>
  );
}

export default App;
