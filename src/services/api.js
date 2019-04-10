const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/json',
}

const checkStatus = (response) => {
    if(response.status >=200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

const parseJSON = (response) => response.json()

export const get = (path) => (
    fetch(`http://localhost:3000/${path}`, {headers})
    .then(checkStatus)
    .then(parseJSON)
)

export const post = (path, data) => (
    fetch(`http://localhost:3000/${path}`, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(checkStatus)
    .then(parseJSON)
)
