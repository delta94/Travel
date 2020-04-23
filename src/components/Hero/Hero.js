import React, { Component } from 'react'
import Sildeshow from '../SildeShow/SildeShow';
// import styles from './Hero.scss'

export default function Hero({children,hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defaultProps = {
    hero : "defaultHero"
}

