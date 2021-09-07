import { combineReducers } from "redux";
import {PUBreducer} from './PUBreducer'
import authReducer from './authReducer'
import { UserRegisterReducer } from "./userReducer";
import UtilisateurReducer from "./UtilisateurReducer";
import expertsReducer from "./expertsReducer";
import { ExpertRegisterReducer } from "./expertReducer";
import authExpertReducer from "./authExpertReducer";
import {RDVreducer} from "./RDVreducer";
import {CONTACTreducer} from "./contactReducer"

export const rootReducer = combineReducers({
    PUBreducer,auth:authReducer,user:UserRegisterReducer,utilisateur:UtilisateurReducer,NosEXPERTS:expertsReducer,ExpertRegisterReducer,RDVreducer,CONTACTreducer,
})