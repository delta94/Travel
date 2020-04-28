import React from 'react'
import Hero from '../components/Hero/Hero' // hero la thu muc goc'
import Banner from '../components/Banner/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
// import City from '../components/City/City'
import FeaturedRooms from '../components/FeatureRoom/FeaturedRooms'


export default function Home() {
    return (
        <>
            <Hero>

                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 299$">
                    <Link to="/rooms" className="btn_primary">our rooms</Link>
                </Banner>
            </Hero>
            {/* <City/> */}
            <FeaturedRooms />
            <Services />
            
        </>

    )
}

