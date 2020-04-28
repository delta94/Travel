import React, { Component } from 'react'
import defaultBcg from '../../images/room-1.jpeg'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../../components/StyledHero'
import Date from '../../components/Daterpick/Date'
import styles from './SingleRoom.scss'
import * as actions from '../../../src/store/actions';
import { connect } from 'react-redux';


class SingleRoom extends Component {


    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
            isOpen: false,
            startDate: '',
            endDate: ''
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    bookRoom = () => {
        this.props.bookRoom({

            roomID: this.props.roomID,
            checkInDate: this.state.startDate,
            checkOutDate: this.state.endDate,
        });
        this.setState({
            isOpen: !this.state.isOpen
        });
        // debugger;
    }

    onChangeDate = (name, date) => {
        console.log(date);
        // debugger;
        this.setState({
            [name]: date
        })

    }


    render() {
        if (this.props.fields == null) return null;
        const { name, description, capacity, size, price, extras, breakfast, pets, image } = this.props.fields;
        const [mainImg, ...defaultImg] = image
        return (
            <>  
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className={styles.btn_primary}>back to rooms</Link>
                    </Banner>
                </StyledHero>
                {this.state.isOpen ?
                        <div className={styles.PopupArea}>
                            <div className={styles.PopupAreaTitle}>Room Booking Comfirm</div>
                            <header>
                                <div className={styles.headerline}>
                                    <span> Price :</span>
                                    <h2>${price}
                                        <span>/Night</span>
                                    </h2>
                                </div>
                                <div className={styles.headerline}>
                                    <span> Size :</span>
                                    <h2>{size} <span>m2</span></h2>
                                </div>
                                <div className={styles.headerline}>
                                    <span>Max capacity : {" "} </span>
                                    <h2> {capacity > 1 ? `${capacity} people` : `${capacity} person `}</h2>
                                </div>
                                <span>{pets ? "Pet allowed" : "No pets allowed"}</span>
                                <span style={{ marginTop: "20px" }}>{breakfast && "Free breakfast included"}</span>
                            </header>
                            <div className={styles.content}>

                                
                                <div className={styles.btnYes} onClick={this.bookRoom}>
                                    <div type='button'>Yes</div>
                                </div>
                                <div className={styles.btnNo} onClick={this.toggleModal}>
                                    <div type='button'>No</div>
                                </div>
                                
                            </div>

                        </div>
                        :
                        <div style={{ display: "none" }}></div>
                    }
                <section className={this.state.isOpen ? "single_room1" : "single_room"}>
                    

                    <div className={styles.single_room_images}>
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className={styles.single_room_info}>
                        <article className={styles.desc}>
                            <h3>details</h3>
                            <p>{description}</p>

                            <h3>Extras</h3>
                            <ul className={styles.extras}>
                                {extras.map((item, index) => {
                                    return <li key={index}>- {item}</li>
                                })}
                            </ul>
                        </article>
                        <div className={styles.room_booking}>
                            <header>
                                <div className={styles.headerline}>
                                    <span> Price :</span>
                                    <h2>${price}
                                        <span>/Night</span>
                                    </h2>
                                </div>
                                <div className={styles.headerline}>
                                    <span> Size :</span>
                                    <h2>{size} <span>m2</span></h2>
                                </div>
                                <div className={styles.headerline}>
                                    <span>Max capacity : {" "} </span>
                                    <h2> {capacity > 1 ? `${capacity} people` : `${capacity} person `}</h2>
                                </div>
                                <span>{pets ? "Pet allowed" : "No pets allowed"}</span>
                                <span style={{ marginTop: "20px" }}>{breakfast && "Free breakfast included"}</span>
                            </header>
                            <div className={styles.content}>
                                <div className={styles.formContainer}>
                                    <div>
                                        <label>Dates</label>
                                        <Date onChangeDate={this.onChangeDate} />
                                    </div>

                                    <div className={styles.saveArea}>
                                        <div className={styles.btnSave}>

                                            <button onClick={this.toggleModal} className={styles.btnSave_btn}>Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <div className={styles.room_booking1}>
                    <div className={styles.headerline}>

                        <h2>${price}
                            <span>/Night</span>
                        </h2>
                        <span>{name}</span>

                    </div>

                    <div className={styles.saveArea}>
                        <button className={styles.btnSave}>
                            <span>Book</span>
                        </button>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    fields: state.room.fields,
    roomID: state.room._id,

})
const mapDispatchToProps = dispatch => ({
    getRoom: (roomID) => dispatch(actions.getRoom(roomID)),
    bookRoom: (roomID) => dispatch(actions.bookRoom(roomID))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);
