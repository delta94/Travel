import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Account.scss'
import { Link } from 'react-router-dom'
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import Profile from '../../components/Profile/Profile'
import Booking from '../../components/Profile/Booking'
export default class Account extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className={styles.account}>
                <div className={styles.accountContainer}>
                    <div className={styles.accountContainer_left}>
                        <section>
                            <ul>
                                <li>
                                    <Link to="/mybooking">
                                        <span><AiFillCalendar /></span>
                                        <span>My bookings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile">
                                        <span><AiOutlineUser /></span>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
