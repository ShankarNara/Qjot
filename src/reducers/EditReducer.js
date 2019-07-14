import {
    TEXT_CHANGED,
    TITLE_CHANGED,
    FILE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    text: '',
    title: '',
    savetag: true,

};   

export default EditReducer = (state = INITIAL_STATE, action) => {

    console.log(state);

    switch(action.type){
        case TEXT_CHANGED:
            return { ...state, text: action.payload , savetag: true };
        case TITLE_CHANGED:
            return { ...state ,title: action.payload , savetag: true};
        default :
            return state;
    }
};