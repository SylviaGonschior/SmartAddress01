import { combineReducers } from 'redux';

import getLocation from './getLocation';
import getContactData from './getContactData';


let reduce = combineReducers({
    location: getLocation,
    contact: getContactData
})

export default reduce;
