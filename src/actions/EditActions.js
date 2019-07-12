import firebase from 'firebase';
import {Actions } from 'react-native-router-flux';

import {
    TITLE_CHANGED,
    TEXT_CHANGED,
    FILE_FETCH_SUCCESS
} from './types';

export const editTitle = (title) => {
    return {
        type: TITLE_CHANGED,
        payload: title
    };
};

export const editText = (text) => {
    return {
        type: TEXT_CHANGED,
        payload: text
    };
};

export const fileCreate = ({title ,text}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/user/${currentUser.uid}/file/`)
            .push({ title, text})
            .then(() => {
                dispatch({type: CREATE_FILE_SUCCESS});
                //move to the file list 
                //send an action in case update is needed 
            });
    };
};

export const fileFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/user/${currentUser.uid}/file/`)
        .on('value',snapshot => { 
            dispatch({type: FILE_FETCH_SUCCESS, payload:snapshot.val()});
         });
    };
};
