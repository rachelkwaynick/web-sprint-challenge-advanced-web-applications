import {
    FETCH_COLORS_START,
    FETCH_COLORS_SUCCESS,
    FETCH_COLORS_FAILURE,
} from '../actions'


const initialState = {
    isLoading: false,
    colorsData: [], 
    error: ''
}

export const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLORS_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_COLORS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                colorsData: action.payload
            }
        case FETCH_COLORS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}