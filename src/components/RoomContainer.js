
import React from 'react'
import RoomList from './Room/RoomList'
import RoomFilter from './RoomFilter/RoomFilter'
import styles from './RoomContainer.scss'

function RoomContainer() {
    return (
        <div className={styles.roomContainer}>
            <RoomFilter></RoomFilter>
            <RoomList ></RoomList>
        </div>
    )
}

export default RoomContainer;

