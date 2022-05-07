
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Loggedin from './components/Loggedin';
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loggedin' element={<Loggedin />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
