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
        return (
<div className={classes.main}>
  <ul className={classes.cards}>
    <li className={classes.cards_item}>
      <div className={classes.card}>
        <div className={classes.card_image}><img src="https://picsum.photos/500/300/?image=10" alt="car"/>
        </div>
        <div className={classes.card_content}>
        <h2 className={classes.card_title}>{work.companyName}</h2>
        <h3>{work.jobTitle}</h3>
        <h5>{work.city}, {work.state}, {work.country}</h5>
        <p>{work.startDate} - {work.endDate}</p>
        <p className={classes.card_text}>{work.jobDescription}</p>
        <Link to={`/updateWork/${work.identifier}`}>
        <button className={classes.btn}>Update</button>
        </Link>
          <button className={classes.btn} onClick={this.onDeleteClick.bind(this, work.identifier)}>Delete</button>
        </div>
        </div>
    </li>
  </ul>
</div>
        )
    }
}

WorkItem.propTypes = {
    deleteWork: PropTypes.func.isRequired
}

export default connect(null, {deleteWork})(WorkItem)