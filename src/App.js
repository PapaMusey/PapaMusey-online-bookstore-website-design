import React, { useState } from 'react';
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
import Reviews from './components/Reviews.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';

function App() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(prevLogin => !prevLogin);
  }

  return (
    <>
      <Nav handleLogin={handleLogin} />
      <BottomNav />
      {login && <Login handleLogin={handleLogin} />}
      <Home />
      <Icons />
      <Featured />
      <Newsletter />
      <Arrivals />
      <Deal />
      <Reviews />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
