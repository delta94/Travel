import React, { useContext } from 'react'

import { RoomContext } from '../../context'
import Title from '../Title/Title'
import styles from './RoomFilter.scss'
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let people = getUnique(rooms, 'capacity');
    people =people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className={styles.filter_container}>
            <Title title="Search rooms"></Title>
            <form className={styles.filter_form}>
                            {/*select type */}
            <div className={styles.form_groups}>
                <label htmlFor="type">Room type</label>
                <select name="type"
                    id="type"
                    value={type}
                    className={styles.form_control}
                    onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/*end select type */}
            {/*guest type */}
            <div className={styles.form_groups}>
                <label htmlFor="capacity">Guest</label>
                <select name="capacity"
                    id="capacity"
                    value={capacity}
                    className={styles.form_control}
                    onChange={handleChange}>
                    {people}
                </select>
            </div>
            {/*end guest type */}
            {/*room price */}
            <div className={styles.form_groups}>
                <label htmlFor="price">Room price 
                <span style={{float :"right"}}>${price}</span>
                </label>
                <input type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange} 
                    className={`${styles.form_control} ,${styles.priceCustom}`}
                >
                </input>
            </div>
            {/*end room price */}
            {/*room size */}
            <div className={styles.form_groups}>
                <label htmlFor="size">Room size</label>
                <div className={styles.size_inputs}>
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className={styles.size_input}></input>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className={styles.size_input}></input>
                </div>
            </div>
            {/*end room size */}
            {/*extras*/}
            <div className={styles.form_groups}>
                <div className={styles.single_extra}>
                    <input  type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className={styles.single_extra}>
                    <input  type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">Pets</label>
                </div>
            </div>
            {/*end extras */}

            
            </form>

        </section>
    )
}
