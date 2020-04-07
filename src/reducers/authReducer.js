import * as actions from "../actions/authActions"

const initialState = {
    userId: "",
    password: "",
    emailAddress: "",
    isLoggedIn: false    
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REGISTER_FORM_UPDATE:
            return {
                ...state,
                [action.field]: action.value
            }
        case actions.SEND_REGISTER_FORM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.SEND_REGISTER_FORM_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.SEND_REGISTER_FORM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false
            }
        case actions.LOGIN_FORM_UPDATE:
            return {
                ...state,
                [action.field]: action.value
            }
        case actions.SEND_LOGIN_FORM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.SEND_LOGIN_FORM_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.SEND_LOGIN_FORM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false
            }
        case actions.SEND_REGISTER_CLEAR_FORM:
            return initialState
        default:
            return state
    }
}