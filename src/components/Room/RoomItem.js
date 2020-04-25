import React from 'react'
import { Link } from 'react-router-dom'
// import defaultImg from '/assets/images/room-1.jpeg'
import PropTypes from 'prop-types';
import styles from './RoomItem.scss'
export default function RoomItem({ room }) {
    const { name, slug, image, price, address } = room.fields;
    console.log(room);
    debugger;
    return (
        <article className={styles.room}>
            <div className={styles.img_container}>
                <img src={image[0] || '/assets/images/room-1.jpeg'} alt="single-room" />
                <div className={styles.price_top}>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className={`${styles.room_link} ${styles.btn_primary}`}>
                    features
                </Link>
            </div>
            <div className={styles.room_info}>
                <Link to={`/rooms/${slug}`} className={styles.RoomItemaddress}>{address}</Link>
                <Link to={`/rooms/${slug}`} className={styles.RoomItemname}>{name}</Link>
                <Link to={`/rooms/${slug}`} className={styles.RoomItemprice}>${price}/Night - Free Cancellation</Link>
                <div className={styles.bookingnow}>
                    <button className={styles.btnBooking}>
                        <Link to={`/rooms/${slug}`}>Đặt Phòng</Link>
                    </button>
                </div>
            </div>

        </article>
    )
}
RoomItem.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        pricce: PropTypes.number.isRequired,
    })
}