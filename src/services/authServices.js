import BackendClient from './backendClient'

export const register = (email, password) => BackendClient.post(`/register`, {
    "email": email,
    "password": password,
})

export const login = (email, password) => BackendClient.post("/login", {
    "email": email,
    "password": password
})