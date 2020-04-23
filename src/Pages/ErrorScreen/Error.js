import React from 'react'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn_primary">return home</Link>
            </Banner>
            
        </Hero>
    )
}
