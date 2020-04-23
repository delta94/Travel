import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Profile.scss'
export default class Profile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className={styles.accountContainer_right}>
            <h1>User details</h1>
            <section>
                <div className={styles.sectionDiv}>
                    <div className={styles.sectionDivleft}>
                        <div className={styles.line1}>Name</div>
                        <div>Nguyen Tien Toan</div>
                    </div>
                    <div >
                        <div className={styles.sectionDivright}>Edit</div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.sectionDiv}>
                    <div className={styles.sectionDivleft}>
                        <div className={styles.line1}>Email</div>
                        <div>toanleaderuet@gmail.com</div>
                    </div>
                    <div>
                        <div className={styles.sectionDivright}>Edit</div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.sectionDiv}>
                    <div className={styles.sectionDivleft}>
                        <div className={styles.line1}>Phone number</div>
                        <div>0368604656</div>
                    </div>
                    <div className={styles.sectionDivright}>
                        <div>Edit</div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.sectionDiv}>
                    <div className={styles.sectionDivleft} >
                        <div className={styles.line1}>Password</div>
                        <span>0368604656</span>
                    </div>
                    <div className={styles.sectionDivright}>
                        <div>Edit</div>
                    </div>
                </div>
            </section>

        </div>
        )
    }
}
