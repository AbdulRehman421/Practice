
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
// import About from './pages/About'
import { lazy, Suspense } from 'react';
let About = lazy(() => import('./pages/About'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </div >
  );
}

export default App;
