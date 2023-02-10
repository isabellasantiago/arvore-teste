import axios from 'axios';

export const fetchBooks = async () => {
    try{
        const { data: response } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10')
        return response
    }catch(err) {
        console.log(err)
    }
}