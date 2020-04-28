import * as actionTypes from '../actionTypes'

const initialState = {
    defaultRoomList: [],
    roomList: [],
    featuredRoomList : []
}


const getAllRoomSuccess = (state, action) => {
    console.log(action.rooms);
    debugger;
    return {
        defaultRoomList: action.rooms,
        roomList: action.rooms,
        featuredRoomList : action.rooms
    };
}

const filterRooms = (state, action) => {
    let roomList = state.defaultRoomList;
    let result = [];
    
    result = action.roomData.type == 'all' ? roomList : roomList.filter(room =>  room.fields.type == action.roomData.type);
    
    // result = action.roomData.featured == '' ? result : roomList.filter(room =>  room.fields.featured == action.roomData.featured);
    //  debugger
    result = action.roomData.breakfast == '' ? result : roomList.filter(room =>  room.fields.breakfast == action.roomData.breakfast);
    debugger;
    result = action.roomData.pets == '' ? result : roomList.filter(room =>  room.fields.pets == action.roomData.pets);
    debugger;
    result = result.filter(room =>  room.fields.price <= action.roomData.price
                                        && room.fields.capacity >= action.roomData.capacity
                                        )
                                        debugger;
    
    debugger;
    return {
        defaultRoomList: roomList,
        roomList: result,
        featuredRoomList: state.featuredRoomList
    }

}


const featuredRoomList = (state, action) =>{
    let roomList = state.defaultRoomList;
    let result1  = [];
    result1 = roomList.filter(room => room.fields.featured === true)

    // result1 = action.roomData.featured === true;
    debugger;
    return {
        defaultRoomList: state.defaultRoomList,
        roomList: state.roomList,
        featuredRoomList: result1
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ROOM_SUCCESS: return getAllRoomSuccess(state, action);
        case actionTypes.FILTER_ROOM_LIST: return filterRooms(state, action);
        case actionTypes.FEATURED_ROOM_LIST: return featuredRoomList(state, action);
        default: return state;
    }
}

export default reducer;