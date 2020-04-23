import React from 'react'
import Room from './RoomItem'
import styles from './RoomList.scss'
export default function RoomList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return <section className={styles.roomslist}>
        <h3>Result : {rooms.length}</h3>
        <div className={styles.roomslist_center}>
            {rooms.map(item => {
                return <Room key={item.id} room={item} />
            })}
        </div>
    </section>
}
