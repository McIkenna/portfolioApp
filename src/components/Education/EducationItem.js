import React, { Component } from 'react'
import styles from "./Edu.module.css"
import {Link} from "react-router-dom"
import 'aos/dist/aos.css';
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {deleteEdu} from "../../actions/EduActions"

class EducationItem extends Component {

  onDeleteClick = id => {
		this.props.deleteEdu(id)
	}
    render() {

       const {education} = this.props;
      
  return (
  <div className={styles.wrapper}>
  <div className={styles.cards_wrap}>
    <div className={styles.card_item}>
      <div className={styles.card_inner}  data-aos="fade-down">
        <div className={styles.card_top}>
          <img src={education.educationImage} alt="car" />
        </div>
          <div className={styles.card_bottom}>
          <div className={styles.card_category}>
            {education.schoolName}
          </div>
          <div className={styles.card_info}>
  
            <p>
              {education.honor}
            </p>
          </div>
          <Link to={`/updateEdu/${education.eduId}`}><button className={styles.button}>Update</button></Link>
			<button className={styles.button} onClick={this.onDeleteClick.bind(this, education.eduId)}>Delete</button>
	         
        </div>
  
			  
        </div>
    </div>
</div>
</div>
        )
    }
}

EducationItem.propTypes = {
  deleteEdu: PropTypes.func.isRequired
}

export default connect(null, {deleteEdu})(EducationItem)