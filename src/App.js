import React from 'react';
import Header from './components/Layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import AddInfo from './components/Info/AddInfo';
import {Provider} from "react-redux";
import store from "./store"
import UpdateInfo from './components/Info/UpdateInfo';
import AddEducation from './components/Education/AddEducation';
import UpdateEdu from './components/Education/UpdateEdu';
import AddWork from './components/Work/AddWork';
import UpdateWork from './components/Work/UpdateWork';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';
import AddSkill from './components/Skill/AddSkill';
import UpdateSkill from './components/Skill/UpdateSkill';
import styles from './app.module.css'
import Footer from './components/Layout/Footer';
import contactForm from './components/Contact/contactForm';
import AddTask from './components/projectTask/AddTask';
import AddImage from './components/ProfileImage/AddImage';


function App() {

  const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  };
  const h2Styles = {
    fontSize: "82px",
  };
 

  return (
    <Provider store={store}>
    <Router>
   
      <Header/>
      <div className={styles.body}>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/addInfo" component={AddInfo} />
      <Route exact path="/updateInfo/:id" component={UpdateInfo} />
      <Route exact path="/addEducation" component={AddEducation } />
      <Route exact path="/updateEdu/:id" component={UpdateEdu} />
      <Route exact path="/addWork" component={AddWork} />
      <Route exact path="/updateWork/:id" component={UpdateWork} />
      <Route exact path="/addProject" component={AddProject} />
      <Route exact path="/updateProject/:id"  component={UpdateProject} />
      <Route exact path="/addSkill" component={AddSkill} />
      <Route exact path="/updateSkill/:id" component={UpdateSkill} />
      <Route exact path="/addImg" component={AddImage} />
      <Route exact path="/contactForm" component={contactForm} />
      <Route exact path="/addTask" component={AddTask} />
      </div>
      <Footer />
    </Router>
    </Provider>

  );
}

export default App;
