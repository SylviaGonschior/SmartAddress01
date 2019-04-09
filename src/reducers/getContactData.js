import {
    CONTACT_FETCH,
    CONTACT_SUCCESS,
    CONTACT_FAILURE
} from './../actions/contactAction';


const initialState = {

    contacts: [],
    loading: false,
    error: null

};


function getContactData(state = initialState, action) {
    console.log('reducer contact:', action);

    switch (action.type) {
        case CONTACT_FETCH:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contacts: action.payload

            };
        case CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                contacts: []
            };

        default:
            return state
    }

}


export default getContactData;



