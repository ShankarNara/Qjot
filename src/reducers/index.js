import {combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EditReducer from './EditReducer';
import FileFetchReducer from './FileFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    edit: EditReducer,
    files: FileFetchReducer
});