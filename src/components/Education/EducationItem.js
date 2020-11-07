import React, { Component } from 'react'
import styles from "./Edu.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

class EducationItem extends Component {
    render() {

       const {education} = this.props;
       const image = `data:image/png;base64,${education.image}`
       AOS.init({duration: 2000});
  return (

  <div className={styles.wrapper}>
  <div className={styles.cards_wrap}>
    <div className={styles.card_item}>
      <div className={styles.card_inner}  data-aos="fade-down">
        <div className={styles.card_top}>
          <img src={image} alt="car" />
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
        </div>
        </div>
    </div>
</div>
</div>
        )
    }
}

export default (EducationItem)