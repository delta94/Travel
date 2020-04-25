import React from 'react';
import styles from './Signup.scss';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
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

    onHandleSignUp = () => {
        debugger;
        this.props.signUpLocal({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        });
    }

    componentDidMount() {
        this.setState({
            isAuth: this.props.isAuth
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth && this.props.isAuth != prevProps.isAuth) {
            this.setState({
                isAuth: this.props.isAuth
            })
        }
    }
    render() {
        return (
            <div className={styles.SignUpForm}>
            <div className={styles.row}>
                <div className={styles.login}>
                    <div className={styles.block}>
                        {/* <div className={styles.logo}>
                            <Logo />
                        </div> */}
                        <div className={styles.inner}>
                            <div>
                                <label>E-mail</label>
                                <input id="username" name="email" onChange={this.onHandleChange} className={` inputIn ${styles.inputIn}`} />
                                <label>User Name</label>
                                <div className={styles.passwordForm}>
                                    <input id="name" name="name" onChange={this.onHandleChange} className={` inputIn ${styles.password}`} />
                                    {/* <a href="/" className={styles.forgot}>Forgot?</a> */}
                                </div>
                                <label>Password</label>
                                <div className={styles.passwordForm}>
                                <input type="password" id="password" name="password" className={` inputIn ${styles.password}`} onChange={this.onHandleChange} />
                                    <a href="/" className={styles.forgot}>Forgot?</a>
                                </div>
                                
                                <button className={styles.login} onClick={this.onHandleSignUp} id="_submit" name="_submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>

                    Already have an account?

                        <a href="/register/">
                            <button type="submit" >Login</button>
                        </a>
                    </div>
                </div>
            </div>
            </div>


        )
    }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    signUpLocal: (SignUpData) => dispatch(actions.signUpLocal(SignUpData)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup);