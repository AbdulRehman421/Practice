
import { useState, useEffect } from 'react';
import './App.css';
import { CirclesWithBar } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  async function getData() {
    let res = await fetch('https://dummyjson.com/products')
    let finalRes = await res.json();
    setProducts(finalRes.products)
    setLoading(false)
    // console.log(finalRes.products);
    // console.log()
    toast.success('🦄 All the data Fetched', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const handleFetch = () => {
    getData()
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="App">
        {loading ? <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel='circles-with-bar-loading'
        />
          :
          products.map((product, id) => (
            <p key={id}>
              {product.title}
            </p>
          ))
        }
        <div>
          <button onClick={handleFetch} style={{ padding: '10px', color: 'black', backgroundColor: 'white', borderRadius: '5px', marginTop: '2rem', cursor: 'pointer' }}>Fetch</button>
        </div>
      </div>

    </>
  );
}

export default App;
