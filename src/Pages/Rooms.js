import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title='our room'>
                <Link to='/' className="btn_primary">return home</Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>

    )
}
export default Rooms;