import React, { Component } from 'react';
import styles from './Footer.scss';
import footerimg from '../../images/footerimg.svg'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    
    render() {
        return (
            <footer className={styles.footerContainer}>
                <div className={styles.line1}>
                    <Link to="/" className={styles.footertitle}>
                        <img src={footerimg} />
                        <h3>TripFinder</h3>
                    </Link>
                </div>
                <div className={styles.line2}>
                    <label>Home</label>
                    <label>Contact</label>
                    <label>Contact</label>
                    <label>Contact</label>
                    <label>Contact</label>
                </div>
                <div className={styles.copyright}>Copyright @ Toannt.</div>
            </footer>
        )
    }
}
