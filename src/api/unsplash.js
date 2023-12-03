import axios from "axios";

const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        'client_id': '_2whzLQaniiq7QBrXw0AtdMOEUg9IF_c1Go9ZL3d_Vw'
    }
})

export default unsplashApi