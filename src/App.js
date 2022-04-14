import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';


function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/cart' exact element={<Cart/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
