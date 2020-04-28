import React from 'react'
import styles from './Signin.scss';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
        console.log(value)
    }

    onHandleLogin = () => {
        // debugger;
        this.props.signInLocal({
            email: this.state.email,
            password: this.state.password
        });
    }

    componentDidMount() {
        this.setState({
            isAuth: this.props.isAuth
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth && this.props.isAuth !== prevProps.isAuth) {
            this.setState({
                isAuth: this.props.isAuth
            })
        }
    }

    render() {
        return (
            this.props.isAuth ? <Redirect to="/" /> :
                <div className={styles.LoginForm}>
                    <div className={styles.row}>
                        <div className={styles.login}>
                            <div className={styles.block}>
                                <div className={styles.inner}>
                                    {/* <form> */}
                                    <label>E-mail</label>
                                    <input id="username" name="email" onChange={this.onHandleChange} className={` inputIn ${styles.inputIn}`} />
                                    <label>Password</label>
                                    <div className={styles.passwordForm}>
                                        <input type="password" id="password" name="password" className={` inputIn ${styles.password}`} onChange={this.onHandleChange} />
                                        <a href="/" className={styles.forgot}>Forgot?</a>
                                    </div>
                                    <button className={styles.login} id="_submit" name="_submit" onClick={this.onHandleLogin} >Log in</button>
                                    {/* </form> */}
                                </div>
                            </div>
                            <div className={styles.footer}>

                                Don't have an account?
        
                        <a href="/signup/">
                                    <button type="submit" >Sign up</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}



const mapStateToProps = state => ({
    isAuth: state.user.isAuth
})
const mapDispatchToProps = dispatch => ({
    signInLocal: (signInData) => dispatch(actions.signInLocal(signInData)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Signin);