
import React from 'react'
import RoomList from './Room/RoomList'
import RoomFilter from './RoomFilter/RoomFilter'
import { RoomConsumer } from '../context'
import Loading from './Loading'
import styles from './RoomContainer.scss'
import { withRoomConsumer } from '../context'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div className={styles.roomContainer}>
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </div>
    )
}

export default withRoomConsumer(RoomContainer)

