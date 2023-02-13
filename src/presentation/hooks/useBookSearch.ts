import axios from 'axios';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { BooksModel, useFilter, baseUrl, fetchBooks} from '../../helpers';


interface DataProps {
    totalItems: number;
    items: Array<BooksModel>;
}

export const useBookSearch = () => {
    const { searchQuery: query } = useFilter();

    const getBooks = useCallback(async ({pageParam = 0}) => {
        console.log('getBooks')
        const { data: res } = await axios.get(`${baseUrl}?q=${query}&startIndex=${pageParam}&maxResults=10`);

        refetch();
        return res;
    }, [query]);

    const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery(
        'books',
        getBooks,
        {
            getNextPageParam: (lastPage) => {
                const maxPages = lastPage.totalItems / 10;
                const nextPage = lastPage?.items?.length + 1;

               return nextPage <= maxPages ? nextPage : undefined;
            },
            enabled: false,
        }, 
    );

    useEffect(() => {
        query && refetch();
    }, [query]);


    return { books: data?.pages, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage};
}