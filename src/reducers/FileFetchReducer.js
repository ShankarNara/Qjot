import {
    FILE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    list: null,
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type){
        case FILE_FETCH_SUCCESS :
            return { ...state ,list: action.payload , loading: false};
        default :
            return state;
    }
};