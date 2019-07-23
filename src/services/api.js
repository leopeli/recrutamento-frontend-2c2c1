import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.royaleapi.com',
    headers: {
        'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc2MywiaWRlbiI6IjQ5NTYwMzg4Njc0NTE5MDQzMiIsIm1kIjp7fSwidHMiOjE1MzgyMzMxMjAxMzl9.Gf5Sz8rWWf8wcesDsTum-iKaGOK-w38zByqZaIeo3Bk` 
    }
})

export default api