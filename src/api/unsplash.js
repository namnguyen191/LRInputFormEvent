import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID V3OPNOM3apGPpxv1FhY7YpTGPx4EYiaoYhWCUvjUY-w'
    }
});