import React, { Component } from 'react'
import classes from "./Info.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteInfo} from "../../actions/InfoActions"
import {Spring} from "react-spring/renderprops"
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../images/Ifekaonwu_Ikenna_resume.pdf"


 class InfoItem extends Component {

    onDeleteClick = id => {
        this.props.deleteInfo(id);
    }


    render() {
        const {info} = this.props;
        AOS.init({duration: 2000});
        return (
            <Spring
            from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 500, duration: 1000}}>
            {props => (
                <div style={props}>
                     <div className={classes.Infocover}>
        <div className={classes.infocontainer}>   
                <div className={classes.textcontainer}>
                    <div className={classes.textinner}>
                        <Spring
                        from = {{opacity: 0, marginLeft: -200}}
                        to = {{opacity: 1, marginLeft: 0}}
                        config={{delay: 1000, duration: 1500}}
                        >
                   {props => (
                       <div style={props}>
                            <p>Hello,</p>
                    <p>I&#8217;M </p>
                    <p>{info.firstName}</p>
                    <p>{info.lastName}</p>
                    <p>{info.occupation}</p>
                    </div>
                    )}
                    </Spring>
                    <Spring
                        from = {{opacity: 0, marginTop: -50}}
                        to = {{opacity: 1, marginTop: 0}}
                        config={{delay: 2000, duration: 1000}}
                        
                        >
                   {props => (
                       <div style={props}>
            <div className={classes.btn} >   
           <Link to="/contactForm" className={classes.hirebtn}>
                Contact Me
           </Link>
                    <a href={resume} download="Ikenna I.pdf"><button className={classes.downcv}>Download CV</button></a>
                    </div>
                    
                    </div>
                    )}
                    </Spring>
                    </div>   
            </div>
          
            <div className={classes.aboutcontainer}>
                <div className={classes.abouttext} data-aos="fade-up">
                <p>{info.summary}</p>
                
                
                <div className={classes.infobutton}>
                <Link to={`/updateInfo/${info.phone}`}>
                <button className={classes.updatebtn}>Update</button>
                </Link>
                <button className={classes.deletebtn} onClick={this.onDeleteClick.bind(this, info.phone)}>Delete</button>
            
                </div>
                </div>
                </div>
       
    </div>
    </div>

                </div>
            )} 
       
    </Spring>
        );
    }
}
InfoItem.propTypes ={
    deleteInfo: PropTypes.func.isRequired
}
export default connect(null, {deleteInfo})(InfoItem)