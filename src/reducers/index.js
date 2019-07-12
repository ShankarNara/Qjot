import {combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EditReducer from './EditReducer';

export default combineReducers({
    auth: AuthReducer,
    edit: EditReducer
});