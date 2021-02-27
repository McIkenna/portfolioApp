import React, { Component } from 'react'
import styles from "./Skill.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteSkill} from "../../actions/SkillAction"

class SkillItem extends Component {

  onDeleteClick = id => {
    this.props.deleteSkill(id);
}
    render() {
        const {skill} = this.props;
        return (     
<div className={styles.main}>
  

  <img className={styles.image} src={skill.skillImageUrl} alt=""/>
  

<div>
  <Link to={`/updateSkill/${skill.skillId}`}>
    <button className={styles.updatebtn}>Update</button>
    </Link>
    <button className={styles.deletebtn} onClick={this.onDeleteClick.bind(this, skill.skillId)}>Delete</button>
    </div>

</div>
        )
    }
}

SkillItem.propTypes = {
  deleteSkill: PropTypes.func.isRequired
}

export default connect(null,{deleteSkill})(SkillItem)