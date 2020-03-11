import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL
} from "../actions"

const initialState = {
    mario: [],
    isFetching: false,
    errors: ''
}

const marioReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }           
        case FETCH_SUCCESS:
            return {
                ...state,
                mario: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default marioReducer