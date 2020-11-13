import { axiosWithAuth } from '../../utilities/axiosWithAuth';


//action types
export const FETCH_COLORS_START = 'FETCH_COLORS_START';
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS';
export const FETCH_COLORS_FAILURE = 'FETCH_COLORS_FAILURE';


//action creators
export const fetchColors = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_COLORS_START });

        axiosWithAuth()
            .get('/colors')
            .then((res) => {
                dispatch({ type: FETCH_COLORS_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({ type: FETCH_COLORS_FAILURE, payload: err.data})
            })
    }
}
