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
import Reviews from './components/Reviews.js'
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import Loader from './components/Loader.js';


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
      <Reviews />
      <Blog />
      <Footer />
      <Loader />
    </>
  );
}

export default App;
