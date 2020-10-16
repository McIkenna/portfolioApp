import React from 'react';
import Header from './components/Layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import AddInfo from './components/Info/AddInfo';
import {Provider} from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/addInfo" component={AddInfo} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
