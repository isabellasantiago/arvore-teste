import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { baseUrl, BooksModel, fetchBooks} from '../../helpers';



interface Props {
    query: string | null;
}

interface DataProps {
    totalItems: number;
    items: Array<BooksModel>;
}

export const useBookSearch = (
    {query}: Props) => 
    {
    const [start, setStart] = useState(0);
    const getBooks = async ({pageParam = 0}) => {
        const { data: res } = await axios.get(`${baseUrl}?q=${query}&startIndex=${pageParam}&maxResults=10`);
        return res;
    };

    const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
        'books',
        getBooks,
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = lastPage.totalItems / 10;
                const nextPage = allPages.length + 1;

               return nextPage <= maxPages ? nextPage : undefined;
            }
        }
    )


    return { books: data?.pages, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage};
}