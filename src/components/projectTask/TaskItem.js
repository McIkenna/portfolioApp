import React, { Component } from 'react'
import classes from "./task.module.css"

class TaskItem extends Component {


    render() {
        const {task} = this.props;
        const data = `data:image/jpeg;base64,${task.data}`
        
        const sectionStyle = {
            width: "400px",
            height: "400px",
       
            backgroundImage: `url(${data})`
        }
        
        return (

    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.card}>
            <div className={classes.leftSide} style={sectionStyle}>

        <h3 className={classes.label}>{task.projectTitle}</h3>
        </div>
            <div className={classes.rightSide}>
              <div className={classes.title}>
                <h5>{task.keyRole}</h5>
                <h3>{task.projectSummary}</h3>
              </div>
              
              <div className={classes.box}>
        
                <div className={classes.progBar}>
                  <div className={classes.bar}></div>
                </div>
                <small>{task.progress}</small>
                
                <div className={classes.btn}>View</div>
              </div>
            </div>          
          </div>
    </div>
    </div>
        )
    }
}

export default TaskItem
