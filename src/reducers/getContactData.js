
const initialState = {
    address: {},
    coordinates: {
        latitude: 49.5222171,
        longitude: 8.394294,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922
    }
};


function getLocation(state = initialState, action) {
    console.log('reducer:', action);

    switch (action.type) {
        case 'COORDINATES_FETCH':
            return Object.assign({}, state, {
                ...state,
                coordinates: action.payload
            })
        case 'LOCATION_FETCH':
            return Object.assign({}, state, {
                ...state,
                address: action.payload
            })
        default:
            return state
    }

}


export default getLocation;
