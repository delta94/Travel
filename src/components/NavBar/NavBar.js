import React, { Component } from 'react';
import styles from './NavBar.scss';
import logo from './../../images/anh.png'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import * as actions from '../../../src/store/actions';
import { connect } from 'react-redux';
class NavBar extends Component {
    state = {
        isOpen: false
    }
    componentDidMount() {
        this.props.getUserInfo()
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    signout = () => {
        this.props.signout()
    }
    render() {
        return (
            <nav className={styles.NavBar}>
                <div className={styles.NavBar__center}>
                    <div className={styles.NavBar__center__header}>
                        <Link to="/" >
                            <img src={logo} />
                        </Link>
                        <button type="button" className={styles.Navbtn} onClick={this.handleToggle}>
                            <FaAlignRight className={styles.Navicon} />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>

                        <li style={{marginTop:"10px"}}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{marginTop:"10px"}}>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        {this.props.isAuth ? <ul className={styles.btn_account}>
                            <li>
                                <Link to="/account">
                                    <button className={styles.btn_avt}>
                                    <div className={styles.img}></div>
                                    {this.props.userInfo.name}
                                    </button>
                                </Link>
                            </li>
                            <li>

                                <button onClick={this.signout} className={styles.btn_signout}>
                                    <i class="fas fa-sign-out-alt"></i>
                                Sign Out</button>
                            </li>
                        </ul> :
                            <ul className={styles.btn_acc}>
                                <li className={styles.liSignin}>
                                    <Link to="/login" className={styles.Signin}>Sign in</Link>
                                </li>
                                <li className={styles.liSignup}>
                                    <Link to="/signup" className={styles.Signup}>Sign up</Link>
                                </li>
                            </ul>}

                    </ul>


                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    userInfo: state.user.userInfo,
})
const mapDispatchToProps = dispatch => ({
    getUserInfo: () => dispatch(actions.getUserInfo()),
    signout: () => dispatch(actions.signOut())
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);