import React, { Component } from 'react';
import styles from './Footer.scss';
import footerimg from '../../images/footerimg.svg'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    
    render() {
        return (
            <footer className={styles.footerContainer}>
                <div>
                    <Link to="/" className={styles.footertitle}>
                        <img src={footerimg} />
                        <h3>TripFinder</h3>
                    </Link>
                </div>
                {/* <div className={`${styles.contact_us}`}>
                            <h5>Liên hệ</h5>
                            <div>
                                <a><i class="fab fa-facebook-f"></i></a>
                                <a><i class="fab fa-instagram"></i></a>
                                <a><i class="fab fa-twitter"></i></a>
                                <a><i class="fab fa-google-plus-g"></i></a>
                            </div>
                            <span><i class="fas fa-phone-square"></i>  0999999999</span>
                            <span><i class="fas fa-map-marked-alt"></i>  số 79 Cầu Giấy Hà Nội</span>
                        </div> */}
                <div className={styles.copyright}>Copyright @ Toannt.</div>
            </footer>
        )
    }
}
