import React, { Component } from 'react'
import styles from "./Skill.module.css"


class SkillItem extends Component {
    render() {
        const {skill} = this.props;
        return (     
<div className={styles.main}>
  <div className={styles.cards}>
  <div className={styles.name}>{skill.skillname}</div>
</div>
</div>
        )
    }
}

export default SkillItem