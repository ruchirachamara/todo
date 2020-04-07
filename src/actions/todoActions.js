import { 
    todo,
    todos,
    deleteToDo,
    todosArchived
} from "../services/toDoServices"

export const SEND_TODO_FORM_REQUEST = "SEND_TODO_FORM_REQUEST"
export const SEND_TODO_FORM_REQUEST_SUCCESS = "SEND_TODO_FORM_REQUEST_SUCCESS"
export const SEND_TODO_FORM_REQUEST_FAILURE = "SEND_TODO_FORM_REQUEST_FAILURE"

const sendTodoFormRequest = _ => ({
    type: SEND_TODO_FORM_REQUEST
})

const sendTodoFormRequestSuccess = _ => ({
    type: SEND_TODO_FORM_REQUEST_SUCCESS
})

const sendTodoFormRequestFailure = _ => ({
    type: SEND_TODO_FORM_REQUEST_FAILURE
})

export const sendRegisterClearForm = _ => ({
    type: SEND_REGISTER_CLEAR_FORM
}) 

export const fetchToDoItems = _ => dispatch => todos().then(data => data)

export const fetchArchivedToDoItems = _ => dispatch => todosArchived().then(data => data)

export const submitForTodo = (item, userId) => dispatch => {
    dispatch(sendTodoFormRequest())    
    return todo(item, userId)
        .then(data => {
            dispatch(sendTodoFormRequestSuccess())
            return data
        })
        .catch(error => {
            dispatch(sendTodoFormRequestFailure())
            return error
        })
}

export const removeToDoItem = (itemId, item, userId) => dispatch => deleteToDo(itemId, item, userId).then(data => data)