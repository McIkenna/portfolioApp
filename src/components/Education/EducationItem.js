import React, { Component } from 'react'
import styles from "./Edu.module.css"

class EducationItem extends Component {
    render() {

       const {education} = this.props;
       const image = `data:image/png;base64,${education.image}`
  return (

  <div className={styles.wrapper}>
  <div className={styles.cards_wrap}>
    <div className={styles.card_item}>
      <div className={styles.card_inner}>
        <div className={styles.card_top}>
          <img src={image} alt="car" />
        </div>
          <div className={styles.card_bottom}>
          <div className={styles.card_category}>
            {education.schoolName}
          </div>
          <div className={styles.card_info}>
        <p className={styles.title}>{education.major}</p>
            <p>
              {education.honor}
            </p>
          </div>
        </div>
        </div>
    </div>
</div>
</div>
        )
    }
}

export default (EducationItem)