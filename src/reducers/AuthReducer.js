import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: ''
};

export default AuthReducer = (state = INITIAL_STATE , action) => {
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED: 
            return { ...state,email: action.payload,user:''};
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload ,user:''};
        case LOGIN_USER_FAIL:
            return { ...state, email: '',password: '',error: 'Authentication failure'};
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE ,user: action.payload};
        default:
            return state;
    }
};