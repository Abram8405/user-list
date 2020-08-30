import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/header';
import { Users } from './components/users';
import { Provider } from './store/globalContext';
import { UserDetail } from './pages/userDetail';
function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Header />
          <div className="users-container">
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/userDetail/:login">
              <UserDetail />
            </Route>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
