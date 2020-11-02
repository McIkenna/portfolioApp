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
        <div className={classes.coursecontainer}>
	    <div className={classes.courses}>
			<div className={classes.course_item}>
			<div className={classes.coursePreview}>
			<div className={classes.course_image}><img src="https://picsum.photos/500/300/?image=10" alt="car"/>
        	</div>
			</div>
		    <div className={classes.courseInfo}>
			<h2>{project.projectTitle}</h2>
			<h6>{project.keyRole}</h6>
		<h3>{project.projectSummary}</h3>
		<Link to={`/updateProject/${project.projectIdentifier}`}><button className={classes.button}>Update</button></Link>
			<button className={classes.button} onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}>Delete</button>
		</div>
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