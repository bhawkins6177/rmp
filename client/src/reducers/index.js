import  { combineReducers } from 'redux';

import authenticationReducer from './auth';

export default combineReducers({
    authenticationReducer   // since key and value are the same I do not need to do Songs: Songs 
});