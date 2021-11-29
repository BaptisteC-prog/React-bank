import './App.css';
import { Home } from './components/home';
import { SignIn } from './components/signIn';
import { User } from './components/user'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { getFromLocalStore } from './helpers';
import { connect } from 'react-redux';
import AuthRoute from './AuthRoute';
import { unlogged } from './components/unlogged';
import { useSelector } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { Suspense } from 'react';
import { lazy } from 'react';
import { store } from '.';

function isAuthenticated() {
  let state = store.getState();
  return getFromLocalStore("token") === state.userReducer.token
}

const getToken = () => {
  return localStorage.getItem('token');
}

console.log("TOKEN LOCAL STORAGE AU DEBUT", getFromLocalStore("token"))
//const state = store.getState();
//console.log("TOKEN STORE REDUX",state.userReducer.token)

function App() {
/*
return (
<Router>
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in.html" component={SignIn} />
      <Route exact path="/user.html" component={User} />
    </Switch>

  </div>
</Router>
);
*/

//REGARDER SI AUTHENTICATED MARCHE NORMALEMENT
console.log("AUTH ",isAuthenticated())
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<p>⌛️💤Chargement...</p>}>
          <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/sign-in.html" component={SignIn} /> */}
          <Route exact path="/signin" component={SignIn} />
          <PrivateRoute
              path="/user"
              isAuthenticated={isAuthenticated()}

            >
              <User />
              </PrivateRoute>
            {/* <PublicRoute
              path="home"
              isAuthenticated={isAuthenticated()}
            >
              <Home />
            </PublicRoute>
            <PublicRoute
              path="sign-in"
              isAuthenticated={isAuthenticated()}
            >
              <SignIn />
            </PublicRoute>
            <PrivateRoute
              path="user"
              isAuthenticated={isAuthenticated()}
            >
              <ProtectedRoute />
            </PrivateRoute> */}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

/*

         <Route exact path="/" component={Home} />
          <Route exact path="/sign-in.html" component={SignIn} />
          <Route exact path="/errorlogin.html" component={unlogged} />
          {IsLoggedIn ? (<Route exact path="/user.html" component={User} />)
            : (<Redirect to="/errorlogin.html" />)
          }

          <AuthRoute path="/" component={Home} type="guest" />
          <AuthRoute path="/sign-in.html" component={SignIn} type="guest" />
          <AuthRoute path="/user.html" component={User} type="private" />

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in.html" component={SignIn} />
          <Route exact path="/user.html" component={User} />
        </Switch>

      </div>
    </Router>
*/



export default App;
