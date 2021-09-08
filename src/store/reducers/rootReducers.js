import {combineReducers} from 'redux'
import businessReducer from './businessReducer'
import driverReducer from './driverReducer'


export const reducers = {
  business: businessReducer,
  driver: driverReducer
};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;