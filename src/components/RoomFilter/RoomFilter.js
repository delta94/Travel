import React, { Component } from 'react'

// import { RoomContext } from '../../context'
import Title from '../Title/Title'
import styles from './RoomFilter.scss'
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
//get all unique values

class RoomFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            types: [
                "all",
                "single",
                "double",
                "family",
                "presidential"
            ]
        }
    }
    componentDidMount(){
        this.setState({
            
        })
    }
    render() {
        return (
            <section className={styles.filter_container}>
                <Title title="Search rooms"></Title>
                <form className={styles.filter_form}>
                    {/*select type */}
                    <div className={styles.form_groups}>
                        <label htmlFor="type">Room type</label>
                        <select name="type"
                            id="type"
                            // value={type}
                            className={styles.form_control}
                            // onChange={handleChange}
                            >
                            {this.state.types.map((type, index) => 
                                <option value={type} key={index}>{type}</option>
                            )}
                        </select>
                    </div>
                    {/*end select type */}
                    {/*guest type */}
                    {/* <div className={styles.form_groups}>
                        <label htmlFor="capacity">Guest</label>
                        <select name="capacity"
                            id="capacity"
                            value={capacity}
                            className={styles.form_control}
                            onChange={handleChange}>
                            {people}
                        </select>
                    </div> */}
                    {/*end guest type */}
                    {/*room price */}
                    {/* <div className={styles.form_groups}>
                        <label htmlFor="price">Room price
                <span style={{ float: "right" }}>${price}</span>
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
                    </div> */}
                    {/*end room price */}
                    {/*room size */}
                    {/* <div className={styles.form_groups}>
                        <label htmlFor="size">Room size</label>
                        <div className={styles.size_inputs}>
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className={styles.size_input}></input>
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className={styles.size_input}></input>
                        </div>
                    </div> */}
                    {/*end room size */}
                    {/*extras*/}
                    {/* <div className={styles.form_groups}>
                        <div className={styles.single_extra}>
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className={styles.single_extra}>
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="pets">Pets</label>
                        </div>
                    </div> */}
                    {/*end extras */}


                </form>

            </section>
        )
    }
}


const mapStateToProps = state => ({
    roomList: state.roomList
})
const mapDispatchToProps = dispatch => ({
    getAllRoom: () => dispatch(actions.getAllRoom()),
})
export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);
