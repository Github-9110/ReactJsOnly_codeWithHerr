
import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from "./components/Textform.js"

function App() {
  return (
      <>  
      <Navbar  title="TextUtils" homeTitle="Home" aboutTitle ="About Us"/>
      <div className="container">
      <Textform heading="Enter to text Analyze Below"/>
      </div>
      </>
  );
}

export default App;


