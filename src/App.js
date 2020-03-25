import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Home from './components/screens/Home/Home';
import Favorites from './components/screens/Favorites/Favorites';
import Auth from './components/screens/Auth/Auth';
import Logout from './components/screens/Auth/Logout';
import New from './components/screens/New/New';
import All from './components/screens/All/All';
import QuoteDetail from './components/screens/QuoteDetail/QuoteDetail';

import * as authActions from './store/actions/auth';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)

  async function tryLogin() {
    await dispatch(authActions.checkAutoLogin())
  }

  useEffect(() => {
    tryLogin();
  }, []);

  let routes = (
    <Switch>
        <Route path='/logout' component={Logout} />
        <Route path='/quotes/:id' component={QuoteDetail} />
        <Route path='/quotes' component={All} />
        <Route path='/new' component={New} />
        <Route path='/auth' component= {Auth}/>
        <Route path='/favorites' component= {Favorites}/>
        <Route path='/' exact component= {Home}/>
        <Redirect to='/'/>
    </Switch>
);
  return (
    <div className="App">
      <Navbar isAuthenticated={token}>
        {routes}
      </Navbar>
    </div>
  );
}

export default withRouter(App);
