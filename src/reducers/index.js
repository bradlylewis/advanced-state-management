import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, APPLY_SMURF, SET_ERROR } from '../actions'


export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
          ...state,
          isLoading: true,
          errorMessage: ''
        });
        case(FETCH_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false
        });
        case(APPLY_SMURF):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload]
        })
        case(FETCH_FAIL):
            return({
                ...state,
                errorMessage: action.payload,
                isLoading: false
        })
        case(SET_ERROR):
            return({
                ...state,
                errorMessage: action.payload
            })
      default:
            return state;
    }
  };

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.