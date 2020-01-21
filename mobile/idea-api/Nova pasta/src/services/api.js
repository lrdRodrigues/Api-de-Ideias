import Axios from 'axios' 

const api = Axios.create({
    baseURL: 'http:192.168.9.15:3050/'
})

export default api 