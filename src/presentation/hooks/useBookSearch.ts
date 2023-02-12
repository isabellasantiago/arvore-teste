import axios from 'axios';
import { useState, useLayoutEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { BooksModel, useFilter, baseUrl, fetchBooks} from '../../helpers';


interface DataProps {
    totalItems: number;
    items: Array<BooksModel>;
}

export const useBookSearch = () => {
    const { searchQuery: query } = useFilter();

    const getBooks = async ({pageParam = 0}) => {
        console.log('caiu books')
        const { data: res } = await axios.get(`${baseUrl}?q=${query}&startIndex=${pageParam}&maxResults=10`);

        return res;
    };

    const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
        'books',
        getBooks,
        {
            getNextPageParam: (lastPage) => {
                const maxPages = lastPage.totalItems / 10;
                const nextPage = lastPage?.items?.length + 1;

               return nextPage <= maxPages ? nextPage : undefined;
            }
        },
    );


    return { books: data?.pages, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage};
}