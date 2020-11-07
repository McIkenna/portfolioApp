import React, { Component, useEffect } from 'react'
import styles from "./Dashboard.module.css"

import {connect} from "react-redux";
import {getInfo} from "../actions/InfoActions"
import PropTypes from "prop-types";
import InfoItem from "./Info/InfoItem"
import EducationItem from './Education/EducationItem';
import {getAllEducation} from "../actions/EduActions"
import WorkItem from './Work/WorkItem';
import {getWorks} from "../actions/WorkActions"
import ProjectItem from './Project/ProjectItem'
import {getProjects} from "../actions/ProjectActions"
import {getSkills} from "../actions/SkillAction"
import {getStoredTasks} from "../actions/ProjectActions"
import SkillItem from './Skill/SkillItem';

import TaskItem from './projectTask/TaskItem';



class Dashboard extends Component {

  componentDidMount(){
    this.props.getInfo();
    this.props.getAllEducation();
    this.props.getWorks();
    this.props.getProjects();
    this.props.getSkills();
    this.props.getStoredTasks()
  }

    render() {
      const {infos} = this.props.info
      const {educations} = this.props.education
      const {works} = this.props.work
      const {projects} = this.props.project
      const {skills} = this.props.skill
      const {tasks} = this.props.task
  


  return (
<div className={styles.body}>
<div className = {styles.dashbody}>
  <div className={styles.main}>
    <div className={styles.info}>
      {infos.map(info => (
        <InfoItem key={info.id} info = {info}/>
      ))}
    </div>
    <div className={styles.work_cover}><h4>Work Experience</h4>
    <div className={styles.work} > 
  {works.map(work => (  <WorkItem key={work.id} work = {work}/>))}
  </div>
  </div>

  <div>
  <div className={styles.task_cover}><h4>Project Undertaken</h4>
  <div className={styles.task}>
    {tasks.map(task => <TaskItem key = {task.id} task ={task} /> )}
  </div>
  </div>
  </div>

  <div>
  <div className={styles.education_cover}><h4>Education</h4>
  <div className={styles.education}>
  {educations.map(education => (  <EducationItem key={education.id} education = {education}/>))}
  </div>
  </div>
  </div>
  <div>
  <div className={styles.skill_cover}><h4>Skill</h4>
  <div className={styles.skill}>
    {skills.map(skill => (

      <SkillItem key={skill.id} skill = {skill} /> ))}
  </div>
  </div>
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
  getProjects: PropTypes.func.isRequired,
  getSkills: PropTypes.func.isRequired,
  getStoredTasks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  info: state.info,
  education: state.education,
  work: state.work,
  project: state.project,
  skill: state.skill,
  task: state.task
})

export default connect(mapStateToProps, {getInfo, getAllEducation, getWorks, getProjects, getSkills, getStoredTasks})(Dashboard);