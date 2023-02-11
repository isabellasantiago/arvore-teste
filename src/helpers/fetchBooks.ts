import axios from 'axios';
import { baseUrl } from './baseUrl';

export const fetchBooks = async (query?: string) => {
    const queryString = query ? query : 'q=react'
    try{
        const { data: response } = await axios.get(`${baseUrl}?${queryString}`)
        return response
    }catch(err) {
        console.log(err)
    }
}