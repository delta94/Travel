import React from 'react'
import styles from './Input.scss'
export default function Input({title,type,placeholder}) {
    return (
        <div className={styles.input}>
            <label>{title}</label>
            <input
            type={type}
            placeholder={placeholder}
            >

            </input>
        </div>
    )
}
