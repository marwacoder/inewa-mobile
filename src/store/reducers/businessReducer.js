import * as actionTypes from '../actions/actionTypes'
  
  const initialState = {
    business: [],
    driver: [],
    isLoading: false,
    error: null
  };
  
   export default businessReducer =(state = initialState, action)=> {
    switch (action.type) {
      case actionTypes.GET_BUSINESS_START:
        return {isLoading: true};
      case actionTypes.GET_BUSINESS_SUCCESS:
        return { ...state };
      case actionTypes.GET_BUSINESS_FAIL:
        return {
        error: 'error'
        };
      default:
        return state;
    }
  }


  
