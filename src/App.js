import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom/SingleRoom';
import Signin from './Pages/SignInScreen/Signin';
import Signup from './Pages/SignUpScreen/Signup';
import Error from './Pages/ErrorScreen/Error';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Account from './Pages/AccountScreen/Account'
// const { createProxyMiddleware } = require('http-proxy-middleware');
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login/" component={Signin}></Route>
        <Route exact path="/signup/" component={Signup}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/account/" component={Account}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
