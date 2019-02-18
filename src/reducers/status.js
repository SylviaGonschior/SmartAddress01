import {STATUS_REPLACE} from '../actions/types';

export const initialState = {
        loading: false,
        info: null,
        error: null,
        success: null,
        refreshing: false
    };

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case STATUS_REPLACE: {
            return {
                ...state,
                loading: action.loading || false,
                info: action.info || null,
                error: action.error || null,
                success: action.success || null,
                refreshing: action.refreshing || false
            };
        }
        default:
            return state;
    }
}
