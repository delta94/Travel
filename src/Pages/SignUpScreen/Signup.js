import React from 'react';
import styles from './Signup.scss';


class Signup extends React.Component {

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
                            <form>
                                <label>E-mail</label>
                                <input id="username" name="_username"  className={` inputIn ${styles.inputIn}`}></input>
                                <label>Password</label>
                                <div className={styles.passwordForm}>
                                    <input type="password" id="password" name="_password" className={` inputIn ${styles.password}`}/>
                                    <a href="/" className={styles.forgot}>Forgot?</a>
                                </div>
                                <label>Repeat password</label>
                                <div className={styles.passwordForm}>
                                    <input type="password" id="password" name="_password" className={` inputIn ${styles.password}`} />
                                    {/* <a href="/" className={styles.forgot}>Forgot?</a> */}
                                </div>
                                <button className={styles.login} type="submit" id="_submit" name="_submit">Sign Up</button>
                            </form>
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

export default Signup;