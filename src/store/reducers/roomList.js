import * as actionTypes from '../actionTypes'

const initialState = []

const getAllRoomSuccess = (state, action) => {

  return action.rooms;
}
const filterRooms = (state, action) => {
    let {
        rooms, type, capacity, price, maxSize, minSize, breakfast, pets
    } = state.fields;
    let {rentorID, status} = state;

    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity)

    //filter by type
    if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
    }
    //change state
    return {
      fields: tempRooms,
      rentorID,
      status
    }


}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.GET_ALL_ROOM_SUCCESS: return getAllRoomSuccess(state, action);
      default: return state;
  }
}

export default reducer;