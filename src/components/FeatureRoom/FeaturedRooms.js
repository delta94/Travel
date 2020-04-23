import React, { Component } from 'react'
import {RoomContext} from '../../../src/context'
import Loading from '../Loading'
import Title from '../Title/Title'
import Room from '../Room/RoomItem'
import styles from './FeatureRoom.scss'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms :rooms} = this.context;
        // console.log(rooms);
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        return (
            <section className={styles.featured_rooms}>
                <Title title="featured rooms" />
                <div className={styles.featured_rooms_center}>
                    {loading?<Loading/> :rooms}
                </div>
                <Loading/>
            </section>
        )
    }
}
