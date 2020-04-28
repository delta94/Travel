import React from 'react';
import styles from './Profile.scss';
import Input from '../../../src/components/UI/Input/Input'
import * as actions from '../../../src/store/actions';
import noBooking from '../../images/noBooking.png'
import { connect } from 'react-redux';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowProfile: true,
        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        console.log(value);
        this.setState({
            [name]: value
        })
    }

    onHandleUpdatePassword = () => {
        let { oldPassword, newPassword, comfirmPassword } = this.state;
        console.log(this.state);
        this.props.updatePassword({
            oldPassword,
            newPassword,
            comfirmPassword
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getUserInfo();
        this.props.getBookingRooms();
    }
    render() {
        return (
            // !this.props.isAuth ? <Redirect to={process.env.REACT_APP_PATH_SIGNIN} /> :
            <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.nav}>
                            <button className={styles.navItem} onClick={() => this.setState({ isShowProfile: true })}>

                                <i class="far fa-id-card"></i>
                                <span>Profile</span>
                            </button>
                            <button className={styles.navItem} onClick={() => this.setState({ isShowProfile: false })}>
                                <i class="fas fa-history"></i>
                                <span> My Booking</span>
                            </button>
                        </div>
                        {this.state.isShowProfile ?
                            <div className={styles.profile}>
                                <div className={styles.avt}>
                                    <div className={styles.img}>
                                        
                                    </div>
                                    <div className={styles.username}>{this.props.userInfo.name}</div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.part}>
                                        <Input name="email" type="email" title="Email" placeholder={this.props.userInfo.email} />
                                        <Input name="fullname" type="text" title="Full name" placeholder={this.props.userInfo.name} />
                                        <Input name="contactNumber" type="number" title="Phone Number" placeholder="0368604656" />
                                        <div className={styles.passControl}>
                                            <span>Password</span>
                                            <input name="oldPassword" type="password" title="oldPassword" placeholder="Password" onChange={this.onHandleChange} />
                                        </div>
                                        <div className={styles.passControl}>
                                            <span>New Password</span>
                                            <input name="newPassword" type="password" title="Password" placeholder="NewPassword" onChange={this.onHandleChange} />
                                        </div>
                                        <div className={styles.passControl}>
                                            <span>Comfirm Password</span>
                                            <input name="comfirmPassword" type="password" title="ComfirmPassword" placeholder="ComfirmPassword" onChange={this.onHandleChange} />
                                        </div>



                                        <button className={styles.btn_update} onClick={this.onHandleUpdatePassword}>Cập nhật thông tin</button>
                                    </div>
                                </div>
                            </div> :
                            <div className={styles.mybooking}>
                                <div className={styles.mybookingLine1}>
                                    <label>My Booking</label>
                                    {this.props.bookingRooms.length === 0
                                        ?
                                        <div className={styles.noBooking}>

                                            <img src={noBooking} />
                                            <div className={styles.noBookingtitle}>
                                                <h4>You have no upcoming bookings</h4>
                                            </div>
                                        </div>
                                        : this.props.bookingRooms.map((room, index) => (
                                            <div className={styles.bookedRoom}>
                                                <div className={styles.bookedRoomimg}>
                                                    <img key={index} src={room.fields.image[0]} />
                                                </div>
                                                <div className={styles.bookedRoomInfo}>
                                                    <div className={styles.bookedRoomInfo_left}>
                                                        <span key={index} className={styles.bookedRoomInfo_Name}>{room.fields.name}</span>
                                                        <span key={index} className={styles.bookedRoomInfo_address}>{room.fields.address}</span>
                                                        <span key={index} className={styles.bookedRoomInfo_price}>{room.fields.price}$/ Night</span>
                                                    </div>
                                                    <div className={styles.bookedRoomInfo_right}>
                                                        <span key={index} className={styles.bookedRoomInfo_date}>CheckIn :     {room.checkInDate} </span>
                                                        <span key={index} className={styles.bookedRoomInfo_date}> CheckOut :   {room.checkOutDate}</span>
                                                    </div>
                                                </div>
                                                <button onClick={() => this.props.cancelRoom(room._id)} className={styles.btnCancel}>
                                                    <i class="fas fa-trash"></i>
                                                cancel</button>
                                            </div>)
                                        )
                                    }


                                </div>

                            </div>}

                    </div>
                </div>
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    bookingRooms: state.bookingRoom,
    userInfo: state.user.userInfo,
})
const mapDispatchToProps = dispatch => ({
    getUserInfo: () => dispatch(actions.getUserInfo()),
    getBookingRooms: () => dispatch(actions.getBookingRoom()),
    updatePassword: (passwordData) => dispatch(actions.updatePassword(passwordData)),
    cancelRoom: (roomID) => dispatch(actions.cancelRoom(roomID))
})
export default connect(mapStateToProps, mapDispatchToProps)(Account);