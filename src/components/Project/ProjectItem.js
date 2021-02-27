import React, { Component } from 'react'
import classes from "./Project.module.css"
import {Link} from "react-router-dom"
import {deleteProject} from "../../actions/ProjectActions"
import {connect} from "react-redux"
import PropTypes from "prop-types"

class ProjectItem extends Component {
	onDeleteClick = id => {
		this.props.deleteProject(id)
	}
    render() {
		const {project} = this.props;
        return (

			<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.card}>
				<div className={classes.leftSide} data-aos="fade-right">
			<img src={project.projectImage} alt="car"/>
			</div>
				<div className={classes.rightSide} data-aos="fade-left">
			   
				  <div className={classes.title}>
				  <h1 className={classes.label}>{project.projectTitle}</h1>
					<h5>{project.keyRole}</h5>
					<h3>{project.projectSummary}</h3>
				  </div>
				  <div className={classes.box}>
					<div
					className={project.progress == 3 ? classes.completedBar : project.progress == 2 ? classes.inProgressBar : project.progress == 1 ? classes.startedBar: classes.NoBar}
				   >
					  <div className={classes.bar}></div>
					</div>
				   
					<small>{project.progressRate}% Completion</small>
				   <a href={project.projectLink} target="_blank"><button className={classes.btn}>View</button></a>
				  </div>
				  
				</div>
				
			  </div>
			  <Link to={`/updateProject/${project.projectId}`}><button className={classes.button}>Update</button></Link>
			<button className={classes.button} onClick={this.onDeleteClick.bind(this, project.projectId)}>Delete</button>
	          
			  
		</div>
		</div>
           
		
        )
    }
}

ProjectItem.propTypes = {
	deleteProject: PropTypes.func.isRequired
}

export default connect(null, {deleteProject})(ProjectItem)