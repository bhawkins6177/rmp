import * as api from '../api/index'
//import {useNavigate} from 'react-router-dom';
import {AUTH} from '../constants/actionTypes.js'


export const signup = (formData, navigate)=> async(dispatch)=> {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH , data});
        
        navigate('/');
    } catch (err) {
        console.log(err);
    }
}

export const signin = (formData, navigate)=> async(dispatch)=> {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        navigate('/');
    } catch (err) {
        console.log(err);
    }
}