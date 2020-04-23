import React from 'react'
import styles from './Title.scss'
export default function Title({title}) {
    return (
        <div className={styles.section_title}>
            <h3>{title}</h3>
            
        </div>
    )
}
