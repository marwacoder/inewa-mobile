import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducers from './reducers/rootReducers'



const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

  const logger = createLogger()

  const persistedReducer = persistReducer(
    persistConfig,
    rootReducers,
     )
  
  
 


  
  export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  export const persistor = persistStore(store);