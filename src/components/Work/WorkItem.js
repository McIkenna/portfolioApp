import React, { Component } from 'react'
import classes from "./Work.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteWork} from "../../actions/WorkActions"

class WorkItem extends Component {

    onDeleteClick = id => {
        this.props.deleteWork(id);
    }
    render() {
        const {work} = this.props;
        const image = `data:image/jpeg;base64,${work.image}`

  
return (
<div className={classes.main}>
  <div className={classes.cards}>
    <div className={classes.cards_item}>
    <div className={classes.flip}>
    <div className={classes.front} >
      <div><img src={image}  alt="car"  className={classes.image} /></div>

    </div>

    <div className={classes.back}>
    <h2>{work.companyName}</h2>
    <h3>{work.jobTitle}</h3>
    <p>{work.jobDescription}</p>
    </div>
    </div>
    </div>
  </div>
</div>


        )
    }
}

WorkItem.propTypes = {
    deleteWork: PropTypes.func.isRequired
}

export default connect(null, {deleteWork})(WorkItem)