import { combineReducers } from "redux";
import {PUBreducer} from './PUBreducer'
import authReducer from './authReducer'

export const rootReducer = combineReducers({
    PUBreducer,auth:authReducer
})