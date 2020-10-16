import React, { Component } from 'react'
import styles from "./Dashboard.module.css"
import CreateInfo from './Info/CreateInfoButton'
import Header from './Layout/Header'

class Dashboard extends Component {
    render() {
        return (
<div>
<div>
  <div className={styles.main}>
    <h2>My PortFolio</h2>
    <CreateInfo />
  </div>
</div>
</div>
        )
    }
}

export default Dashboard