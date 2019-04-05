import { combineReducers } from 'redux';

import getLocation from './getLocation';



let reduce = combineReducers({
    location: getLocation
})

export default reduce;
