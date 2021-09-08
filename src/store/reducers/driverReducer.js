import * as actionTypes from '../actions/actionTypes'
  
  const initialState = {
    data: {},
    isLoading: false,
    error: null,
    message: ''
  };
  
  export default  diver =(state = initialState, action)=> {
    switch (action.type) {
      case actionTypes.GET_DRIVERS_LOCATION_START:
        return {isLoading: true};
      case actionTypes.GET_DRIVERS_LOCATION_SUCCESS:
        return { 
          data: action.payload
         };
      case actionTypes.GET_DRIVERS_LOCATION_FAIL:
        return {
        isLoading: false,
        error: true,
        message: action.payload.message
        };
      default:
        return state;
    }
  }

