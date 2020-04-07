import { combineReducers } from "redux"

import { authReducer as auth } from "./authReducer"
import { todoReducer as todo } from "./todoReducer"

const rootReducer = combineReducers({
    auth,
    todo
})

export default rootReducer