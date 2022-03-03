import React from 'react';
import './App.css';
import Header from './components/header';
import Meme from './components/meme';

function App() {
  return (
    <div className="App">
     {/* <h1>hi</h1> */}
     <Header />
     <Meme />
    </div>
  );
}

export default App;
