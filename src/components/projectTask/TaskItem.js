import React, { Component } from 'react'
import classes from "./task.module.css"

class TaskItem extends Component {


    render() {
        const {task} = this.props;
        const data = `data:image/jpeg;base64,${task.data}`
        return (
            <div>
            <div className={classes.coursecontainer}>
            <div className={classes.courses}>
                <div className={classes.course_item}>
                <div className={classes.coursePreview}>
                <div className={classes.course_image}><img src= {data} alt="car"/>
                </div>
                </div>
                <div className={classes.courseInfo}>
                <h2>{task.projectTitle}</h2>
                <h6>{task.keyRole}</h6>
            <h3>{task.projectSummary}</h3>
            </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default TaskItem
