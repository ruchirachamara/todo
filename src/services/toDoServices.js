import BackendClient from './backendClient'

export const todos = _ => BackendClient.get(`/todos`)

export const todosArchived = _ => BackendClient.get(`/todosArchived`)

export const todo = (item, userId) => BackendClient.post(`/todo`, {
    "item": item,
    "userId": userId
})

export const deleteToDo = (itemId, item, userId) => {
    console.log(itemId, item, userId)
    return BackendClient.post(`/removetodo?key=${itemId}`, {
    "item": item,
    "userId": userId
})}