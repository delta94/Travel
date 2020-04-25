import React, { Component } from 'react'
import defaultBcg from '../../images/room-1.jpeg'
// import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../../context'
import StyledHero from '../../components/StyledHero'
import Date from '../../components/Daterpick/Date'
import styles from './SingleRoom.scss'
import PopupBooking from '../../../src/components/PopupBooking/PopupBooking'
export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props )
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
            isOpen: false
        };
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    static contextType = RoomContext;
    // componentDidMount(){}
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if (!room) {
            return (<div className={styles.error}>
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className={styles.btn_primary}>back to rooms</Link>
            </div>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className={styles.btn_primary}>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className={styles.single_room}>

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
                                <span>{breakfast && "Free breakfast included"}</span>
                            </header>
                            <div className={styles.content}>
                                <form className={styles.formContainer}>
                                    <div>
                                        <label>Dates</label>
                                        <Date />
                                    </div>
                                    {/* <div>
                                        <label>Guests</label>
                                    </div> */}
                                    <div className={styles.saveArea}>
                                        <div className={styles.btnSave}>
                                            {/* <PopupBooking/> */}
                                            <button onClick={this.toggleModal}>
                                                Open the modal
                                            </button>

                                            <PopupBooking show={this.state.isOpen}
                                                onClose={this.toggleModal}>
                                                Here's some content for the modal
                                            </PopupBooking>
                                        </div>
                                    </div>
                                </form>
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
