import React, { Component } from 'react'
import Room from './RoomItem'
import styles from './RoomList.scss'
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class RoomList extends Component {
    
    componentDidMount(){
        this.props.getAllRoom();
    }
    render() {



        if (this.props.roomList.length === 0) {
            return (
                <div className="empty-search">
                    <h3>unfortunately no rooms matched your search parameters</h3>
                </div>
            )
        }
        return (<section className={styles.roomslist}>
            <h3>Result : {this.props.roomList.length}</h3>
            <div className={styles.roomslist_center}>
                {this.props.roomList.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>)
    }
}

const mapStateToProps = state => ({
    roomList: state.roomList
})
const mapDispatchToProps = dispatch => ({
    getAllRoom: () => dispatch(actions.getAllRoom()),
})
export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
