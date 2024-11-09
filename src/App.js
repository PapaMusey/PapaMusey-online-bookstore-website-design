import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import BottomNav from './components/BottomNav.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Icons from './components/Icons.js';
import Featured from './components/Featured.js';
import Newsletter from './components/Newsletter.js';
import Arrivals from './components/Arrivals.js';
import Deal from './components/Deal.js';


function App() {
  return (
    <>
      <Nav />
      <BottomNav />
      <Login />
      <Home />
      <Icons />
      <Featured />
      <Newsletter />
      <Arrivals />
      <Deal />
    </>
  );
}

export default App;
