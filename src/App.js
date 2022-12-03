import React from 'react';
import Header from './components/header/header';
import Section from './components/app-body/app-body';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';



function App() {
  return (
      <div className="App">
        <Header/>
        <Section/>
      </div>
   
  );
}

export default App;
