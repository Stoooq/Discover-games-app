import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7db9327592904ea58949ff7ffcfdfe5d'
    }
})