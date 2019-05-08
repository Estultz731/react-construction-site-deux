import React from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => (<nav>
  <a className="left" href="#site">Acme Construction</a>
  <a className="right" href="#social">Social</a>
  <a className="right" href="#contact">Contact</a>
</nav>)

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
