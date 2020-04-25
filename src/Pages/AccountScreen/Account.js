import React from 'react';
import styles from './Profile.scss';
// import Menu from '../../../src/components/NavBar/NavBar';
// import Footer from '../../../src/components/Footer/Footer';
import Input from  '../../../src/components/UI/Input/Input'
import { FaAddressCard, FaUserAlt } from 'react-icons/fa';

class Account extends React.Component {

    render() {
        return (
            // !this.props.isAuth ? <Redirect to={process.env.REACT_APP_PATH_SIGNIN} /> :
            <React.Fragment>
                {/* <Menu /> */}
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.nav}>
                            <div className={styles.navItem}>
                                <FaAddressCard className={styles.icon}/>
                                Profile
                            </div>
                            <div className={styles.navItem}>
                                <FaAddressCard className={styles.icon} />
                                My Booking
                            </div>
                        </div>
                        
                             {/* <div className={styles.profile}>
                                <div className={styles.avt}>
                                    <div className={styles.img}>
                                        
                                    </div>
                                    <div className={styles.username}>Nguyen Tien Toan</div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.part}>
                                        <Input name="email" type="email" title="Email" placeholder="Email" />
                                        <Input name="fullname" type="text" title="Full name" placeholder="Nguyen Tien Toan"/>
                                        <Input name="contactNumber" type="number" title="Phone Number" placeholder="Phone Number"/>
                                        <div className={styles.btn_update} >Cập nhật thông tin</div>
                                    </div>
                                </div>
                            </div> */}
                            <div className={styles.mybooking}>
                                <div className={styles.mybookingLine1}>
                                    <label>You have no upcoming bookings</label>
                                    <label></label>
                                </div>
                                <div></div>
                            </div>
                        
                    </div>
                </div>
                {/* <Footer /> */}
            </React.Fragment> 
        )
    }
}


export default Account;