import React, { Component } from 'react'
import styles from "./Dashboard.module.css"
import CreateInfo from './Info/CreateInfoButton'
import {connect} from "react-redux";
import {getInfo} from "../actions/InfoActions"
import PropTypes from "prop-types";
import InfoItem from "./Info/InfoItem"
import CreateEduButton from './Education/CreateEduButton';
import EducationItem from './Education/EducationItem';
import {getAllEducation} from "../actions/EduActions"
import CreateWorkButton from './Work/CreateWorkButton';
import WorkItem from './Work/WorkItem';
import {getWorks} from "../actions/WorkActions"
import CreateProjectButton from './Project/CreateProjectButton';
import ProjectItem from './Project/ProjectItem'
import {getProjects} from "../actions/ProjectActions"

class Dashboard extends Component {

  componentDidMount(){
    this.props.getInfo();
    this.props.getAllEducation();
    this.props.getWorks();
    this.props.getProjects();
  }

    render() {
      const {infos} = this.props.info
      const {educations} = this.props.education
      const {works} = this.props.work
      const {projects} = this.props.project
     
  return (
<div className={styles.body}>
<div className = {styles.dashbody}>
  <div className={styles.main}>
    <h2>My PortFolio</h2>
    <CreateInfo />
    <CreateEduButton />
    <CreateWorkButton />
    <CreateProjectButton />
    <div>
      {infos.map(info => (
        <InfoItem key={info.id} info = {info}/>
      ))}
    </div>
    <div>
  {educations.map(education => (  <EducationItem key={education.id} education = {education}/>))}
  </div>
  <div>
  {works.map(work => (  <WorkItem key={work.id} work = {work}/>))}
  </div>
  <div>
    {projects.map(project => (<ProjectItem key={project.id} project = {project} />))}
  </div>
  </div>
</div>
</div>
        )
    }
}

Dashboard.propTypes = {
  info: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired,
  getInfo: PropTypes.func.isRequired,
  getAllEducation: PropTypes.func.isRequired,
  getWorks: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  info: state.info,
  education: state.education,
  work: state.work,
  project: state.project
})

export default connect(mapStateToProps, {getInfo, getAllEducation, getWorks, getProjects})(Dashboard);