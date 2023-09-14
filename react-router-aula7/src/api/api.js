import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:5000'
});

const search = async (url, setData) =>{
    const response = await api.get(url);
    setData(response.data);
}

export {api, search}