const key = '47f12bc0fcmsh1e8241ff8e2313ep160292jsn1a2519eae5b2'
const basePath = 'https://api-football-beta.p.rapidapi.com'
class API {
    static get(path) {
        const headers = new Headers({
            'x-rapidapi-key': key,
            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
        })
        return fetch(`${basePath}${path}`, { method: 'GET', headers }).then((response) =>
            response.json()
        )
    }
    static post(path) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${key}`
        })
        return fetch(`${basePath}${path}`, { method: 'POST', headers }).then((response) =>
            response.json()
        )
    }
}

export default API
