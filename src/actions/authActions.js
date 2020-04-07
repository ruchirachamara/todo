import { 
    login,
    register,    
} from "../services/authServices"

export const LOGIN_FORM_UPDATE = "LOGIN_FORM_UPDATE"
export const REGISTER_FORM_UPDATE = "REGISTER_FORM_UPDATE"
export const SEND_LOGIN_FORM_REQUEST = "SEND_LOGIN_FORM_REQUEST"
export const SEND_REGISTER_CLEAR_FORM = "SEND_REGISTER_CLEAR_FORM"
export const SEND_REGISTER_FORM_REQUEST = "SEND_REGISTER_FORM_REQUEST"
export const SEND_LOGIN_FORM_REQUEST_SUCCESS = "SEND_LOGIN_FORM_REQUEST_SUCCESS"
export const SEND_LOGIN_FORM_REQUEST_FAILURE = "SEND_LOGIN_FORM_REQUEST_FAILURE"
export const SEND_REGISTER_FORM_REQUEST_SUCCESS = "SEND_REGISTER_FORM_REQUEST_SUCCESS"
export const SEND_REGISTER_FORM_REQUEST_FAILURE = "SEND_REGISTER_FORM_REQUEST_FAILURE"

const sendRegisterFormRequest = _ => ({
    type: SEND_REGISTER_FORM_REQUEST
})

const sendRegisterFormRequestSuccess = _ => ({
    type: SEND_REGISTER_FORM_REQUEST_SUCCESS
})

const sendRegisterFormFailure = _ => ({
    type: SEND_REGISTER_FORM_REQUEST_FAILURE
})

const sendAuthLoginReuqest = _ => ({
    type: SEND_LOGIN_FORM_REQUEST
})

const sendAuthLoginReuqestSuccess = _ => ({
    type: SEND_LOGIN_FORM_REQUEST_SUCCESS
})

const sendAuthLoginReuqestFailure = _ => ({
    type: SEND_LOGIN_FORM_REQUEST_FAILURE
})

export const sendRegisterClearForm = _ => ({
    type: SEND_REGISTER_CLEAR_FORM
}) 

export const registerFormUpdate = (field, value) => ({
    type: REGISTER_FORM_UPDATE,
    field,
    value
})

export const loginFormUpdate = (field, value) => ({
    type: LOGIN_FORM_UPDATE,
    field,
    value
})

export const submitForRegistration = _ => (dispatch, getState) => {
    dispatch(sendRegisterFormRequest())
    const { emailAddress, password } = getState().auth  
    return register(emailAddress, password)
        .then(data => {
            dispatch(sendRegisterFormRequestSuccess())
            return data
        })
        .catch(error => {
            dispatch(sendRegisterFormFailure())
            return error
        })
}

export const authLogin = _ => (dispatch, getState) => {
    const { emailAddress, password } = getState().auth  
    dispatch(sendAuthLoginReuqest())
    return login(emailAddress, password).then(data => {        
            dispatch(sendAuthLoginReuqestSuccess())
            return data
    })
    .catch(error => {
        dispatch(sendAuthLoginReuqestFailure())
        return error
    })
}