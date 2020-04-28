import React, { Component } from 'react'
import * as actions from '../../../src/store/actions';
import { connect } from 'react-redux';
import Title from '../Title/Title'
import Room from '../Room/RoomItem'
import styles from './FeatureRoom.scss'

class FeaturedRooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.props.getAllRoom();
        this.props.featuredRoomList();
        this.setState({
            
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.defaultRoomList != prevProps.defaultRoomList){
            this.props.featuredRoomList();
        }
        console.log(this.props.featuredRoomList)
    }


    render() {
        console.log(this.props.featuredRoomList);

        return (
            <section className={styles.featured_rooms}>
                <Title title="Featured rooms" />                
                <div className={styles.featured_rooms_center}>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    defaultRoomList: state.roomList.defaultRoomList,
    featuredRoomList: state.roomList.featuredRoomList
    
})
const mapDispatchToProps = dispatch => ({
    getAllRoom: () => dispatch(actions.getAllRoom()),
    featuredRoomList: () => dispatch(actions.featuredRoomList())
})
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRooms);
