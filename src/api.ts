import axios, { Axios } from 'axios';
import { baseUrl } from './config';

const Api: Axios = axios.create({
    baseURL: baseUrl
})

export default Api;