import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignUpFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import Blog from './components/Blog'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/blog/:name'>
            <Blog />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
