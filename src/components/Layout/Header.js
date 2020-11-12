import React, { Component } from 'react'
import styles from "./Header.module.css"
import {Link} from "react-router-dom"
import CreateInfo from '../Info/CreateInfoButton'
import CreateEduButton from '../Education/CreateEduButton';
import CreateWorkButton from '../Work/CreateWorkButton';
import CreateProjectButton from '../Project/CreateProjectButton';
import CreateSkillButton from '../Skill/CreateSkillButton';
import CreateProfileImage from '../ProfileImage/CreateProfileImage';
import CreateTaskButton from '../projectTask/CreateTaskButton';
import logo from "../images/Ikenna2.png"

class Header extends Component {
    render() {
        return (
        <div className={styles.Header}>
            <div className={styles.maxWidth}> 
    
         
                <div className={styles.navItem}>
                <li><CreateInfo/></li>
                <li><CreateEduButton /></li>
                <li><CreateWorkButton /></li>
                <li><CreateProjectButton /></li>
                <li><CreateSkillButton /></li>
                <li><CreateProfileImage /></li>
                <li><CreateTaskButton /></li>
                </div>

                <Link to="/"><img src={logo} alt="IKENNA" className={styles.logo}/>
                </Link>   
                </div>
                
        </div>
        )
    }
}

export default Header