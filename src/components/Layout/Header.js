import React, { Component } from 'react'
import styles from "./Header.module.css"
import {Link} from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
                <Link to="/Dashboard" className={styles.button}>
                Go to DashBoard
                </Link>
                <h1>NAVIGATION</h1>
            </div>
        )
    }
}

export default Header