import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>

        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  );
}

export default App;
