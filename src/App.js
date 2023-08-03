import React from 'react';
import './Styled/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Robotos from './Components/Robotos';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div id='App'>
        <Header/>
        <Home/>
        <About/>
        <Robotos/>
        <Footer/>
    </div>
  );
};

export default App;