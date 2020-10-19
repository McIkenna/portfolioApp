import React from 'react';
import Header from './components/Layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import AddInfo from './components/Info/AddInfo';
import {Provider} from "react-redux";
import store from "./store"
import UpdateInfo from './components/Info/UpdateInfo';
import AddEducation from './components/Education/AddEducation';
import AddWork from './components/Work/AddWork';
import UpdateWork from './components/Work/UpdateWork';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/addInfo" component={AddInfo} />
      <Route exact path="/updateInfo/:id" component={UpdateInfo} />
      <Route exact path="/addEducation" component={AddEducation } />
      <Route exact path="/addWork" component={AddWork} />
      <Route exact path="/updateWork/:id" component={UpdateWork} />
      <Route exact path="/addProject" component={AddProject} />
      <Route exact path="/updateProject/:id"  component={UpdateProject} />


    </div>
    </Router>
    </Provider>
  );
}

export default App;
