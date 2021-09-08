import {combineReducers} from 'redux';

import * as actionTypes from '../actions/actionTypes';

const initState = {
  data: {},
  pageSize: 0,
  isLoading: false,
  error: false,
};

export const news = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PUBLISH_NEWS_REQUEST:
      return {
        isLoading: true,
      };
    case actionTypes.PUBLISH_NEWS_SUCCESS:
      return {
        isLoading: false,
        error: false,
        data: action.payload,
      };
    case actionTypes.PUBLISH_NEWS_FAILURE:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  news,
});

export default reducers;
