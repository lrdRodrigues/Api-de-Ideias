import Axios from 'axios' 

const api = Axios.create({
    baseURL: 'https://api-de-ideias.herokuapp.com/'
})

export default api 