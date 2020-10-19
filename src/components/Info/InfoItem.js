import React, { Component } from 'react'
import classes from "./Info.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteInfo} from "../../actions/InfoActions"

 class InfoItem extends Component {

    onDeleteClick = id => {
        this.props.deleteInfo(id);
    }

    render() {
        const {info} = this.props;
        return (
            <div className={classes.Infocover}>
        <div className={classes.infocontainer}>   
                <div className={classes.textcontainer}>
                    <p>Hello,</p>
                    <p>I&#8217;M </p>
                    <p>{info.firstName}</p>
                    <p>{info.lastName}</p>
                    <p>{info.occupation}</p>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                    <button className={classes.hirebtn}>Hire me</button>
                    <button className={classes.downcv}>Download CV</button>
                </div>
            <div className={classes.aboutcontainer}>
                <div className={classes.abouttext}>
                <p>CAREER SUMMARY</p>
                <p>{info.summary}</p>
                </div>
                <Link to={`/updateInfo/${info.phone}`}>
                <button className={classes.updatebtn}>Update</button>
                </Link>
                <button className={classes.deletebtn} onClick={this.onDeleteClick.bind(this, info.phone)}>Delete</button>
            </div>
       
    </div>
    </div>
        );
    }
}
InfoItem.propTypes ={
    deleteInfo: PropTypes.func.isRequired
}
export default connect(null, {deleteInfo})(InfoItem)