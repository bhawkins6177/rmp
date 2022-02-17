import {AUTH, LOGOUT} from '../constants/actionTypes'

const authenticationReducer = (state = {authData:null}, action) => {// authData: null is default
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}))
            return {...state, authData: action?.data};
        
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};

        default:
        
            return state;
            
    }
}
export default authenticationReducer;