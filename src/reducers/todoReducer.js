import * as actions from "../actions/authActions"

const initialState = {
    loading: false
}

export const todoReducer = (state = initialState, action) => {    
    switch (action.type) {
        case actions.SEND_TODO_FORM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.SEND_TODO_FORM_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.SEND_TODO_FORM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false
            }
        case actions.SEND_TODO_FORM_CLEAR_FORM:
            return initialState
        default:
            return state
    }
}