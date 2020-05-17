import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './componentes/home/Home';
import Javascript from './componentes/paginas/JavaScript/Javascriptpagina';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/javascript" exact component={Javascript} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
