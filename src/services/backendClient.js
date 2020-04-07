import { backendBaseUrl } from "../utils/config"

class BackendClient {

    get = path => {
        let options = {}
        options = {
            method: 'GET',
            headers: {
                Accept: "application/json"
            }
        }    
        return fetch(backendBaseUrl + path, options).then(response => response.json()).then(data => data).catch(error => error)
    }

    post = (path, body = {}) => {
        let options = {}        
        const formData = new FormData()
        Object.keys(body).forEach(key => formData.append(key, body[key]))
        options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
        }
        return fetch(backendBaseUrl + path, options).then(response => response.json()).then(data => data).catch(error => error)
    }

}

export default new BackendClient()