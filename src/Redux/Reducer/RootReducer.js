



import { combineReducers } from 'redux';
import { DataSlice } from './DataSlice';
import { AuthSlice } from './AuthSlice';

export const rootReducer=combineReducers({
    Data:DataSlice,
    Auth:AuthSlice
})


