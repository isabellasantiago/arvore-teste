import axios from 'axios';
import { baseUrl, keyId } from './baseUrl';

export const fetchBooks = async (query?: string) => {
    const q = query ? query : 'q=react'
    try{
        const { data: response } = await axios.get(`${baseUrl}?${q}&startIndex=0&maxResults=10`)
        return response
    }catch(err) {
        console.log(err)
    }
}