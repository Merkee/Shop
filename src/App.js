import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import TitleBlock from './components/TitleBlock/TitleBlock';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import UserCart from './components/Cart/UserCart/UserCart';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <TitleBlock/>
        <Header/>
        <div className="Content">
          <Route path="/Main">
            <Main/>
          </Route>
          <Route path="/Catalog">
            <Catalog/>
          </Route>
          <Route path="/Contacts">
            <Contacts/>
          </Route>
          <Route path="/AboutUs">
            <AboutUs/>
          </Route>
          <Route path="/LogIn">
            <LogIn/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/Cart">
            <UserCart/>
          </Route>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
