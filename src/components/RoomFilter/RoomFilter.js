import React, { Component } from 'react'

import Title from '../Title/Title'
import styles from './RoomFilter.scss'
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
//get all unique values

class RoomFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: "all",
            capacity: 1,
            price: 600,
            breakfast: false,
            pets: false,
            featured: false,
        }
    }
    componentDidMount(){
        this.setState({
            
        })
    }
    handleChange = async (event) => {
        const target = event.target
        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        console.log(value);
        await this.setState({
            [name]: value
        });

        
        this.props.filterRoomList(this.state)
    }
    types = [
        'all',
        'single',
        'double',
        'family',
        'presidential'
    ];
    capacities = [1,2,3,6,10]
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
                            
                            className={styles.form_control}
                            onChange={this.handleChange}
                            >
                            {this.types.map((type, index) => 
                                <option value={type} key={index}>{type}</option>
                            )}
                        </select>
                    </div>
                    {/*end select type */}
                    {/*guest type */}
                    <div className={styles.form_groups}>
                        <label htmlFor="capacity">Guest</label>
                        <select name="capacity"
                            id="capacity"
                            value={this.state.capacity}
                            className={styles.form_control}
                            onChange={this.handleChange}>
                            {this.capacities.map((capacity, index) => 
                                <option value={capacity} key={index}>{capacity}</option>
                            )}
                        </select>
                    </div>
                    {/*end guest type */}
                    {/*room price */}
                    <div className={styles.form_groups}>
                        <label htmlFor="price">Room price
                <span style={{ float: "right" }}>${this.state.price}</span>
                        </label>
                        <input type="range"
                            name="price"
                            min={0}
                            max={600}
                            id="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            className={`${styles.form_control} ,${styles.priceCustom}`}
                        >
                        </input>
                    </div>
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
                            <input type="checkbox" name="breakfast" id="breakfast" checked={this.state.breakfast} onChange={this.handleChange} />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className={styles.single_extra}>
                            <input type="checkbox" name="pets" id="pets" checked={this.state.pets} onChange={this.handleChange} />
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
    filterRoomList: (filterData) => dispatch(actions.filterRoomList(filterData))
})  
export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);
