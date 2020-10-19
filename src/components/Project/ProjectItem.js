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
            <div>
                <div className={classes.coursesContainer}>
	    <div className={classes.course}>
		<div className={classes.coursePreview}>
			<h2>{project.projectTitle}</h2>
	
		</div>
		    <div className={classes.courseInfo}>
			<div className={classes.progressContainer}>
				<div className={classes.progress}></div>
				<span className={classes.progressText}>
					{project.progressrate}
				</span>
			</div>
			<h6>{project.keyRole}</h6>
		<h2>{project.projectSummary}</h2>
		<Link to={`/updateProject/${project.projectIdentifier}`}><button className={classes.button}>Update</button></Link>
			<button className={classes.button} onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}>Delete</button>
		</div>
	</div>
    </div>
            </div>
        )
    }
}

ProjectItem.propTypes = {
	deleteProject: PropTypes.func.isRequired
}

export default connect(null, {deleteProject})(ProjectItem)