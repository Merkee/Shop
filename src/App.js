import logo from './logo_gasp.png';
import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <div className="ContentWrapper">
          <Route path="/Main" component={Main}/>
          <Route path="/Catalog" component={Catalog}/>
          <Route path="/Contacts" component={Contacts}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
