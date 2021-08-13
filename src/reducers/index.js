import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, APPLY_SMURF } from '../actions'


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: 'error placeholder'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
          ...state,
          isLoading: true,
          error: ''
        });
        case(FETCH_SUCCESS):
            return({
                ...state,
                quote: action.payload,
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
                error: action.payload,
                isLoading: false
        })
      default:
            return state;
    }
  };

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.