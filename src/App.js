import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Nominations from './Components/Nominations'
import Footer from './Components/Footer';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />      
      <Switch>
        <Route exact path="/bestFlix" component={Main} />
        <Route exact path="/bestFlix/nominations" component={Nominations} />
        <Route component={Main} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;