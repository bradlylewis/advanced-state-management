import axios from 'axios';

export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log("RESPONSE: ", res)
                dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    })
}

export const FETCH_START = 'FETCH_START';
export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = quote => {
    return({type: FETCH_SUCCESS, payload: quote});
}

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = error => {
    return({type: FETCH_FAIL, payload: error});
}

export const APPLY_SMURF = 'APPLY_SMURF';
export const applySmurf = smurf => {
    return({type: APPLY_SMURF, payload: smurf});
}

export const SET_ERROR = 'SET_ERROR';
export const setError = error => {
    return({type: SET_ERROR, payload: error});
}