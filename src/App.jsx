import React from 'react'
import ParticlesComponent from './components/Particles';
import MainContainer from './components/MainContainer';
import './App.css'


function App() {
  return (
    <div className='App'>
      <ParticlesComponent id = "particles" />
      <MainContainer />
    </div>
  );
}


export default App
