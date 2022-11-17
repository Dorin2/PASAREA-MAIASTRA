import React from 'react';
import Header from './components/header/header';
import Section from './components/app-body/app-body';
import './App.css';
import Doptions  from './components/services/topfilms';


function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Doptions/>
    </div>
  );
}

export default App;
