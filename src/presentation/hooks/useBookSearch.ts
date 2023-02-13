import axios from 'axios';
import {  useEffect, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { BooksModel, useFilter, baseUrl} from '../../helpers';
import { reduceValue } from '../../helpers/factory/reduced';


interface DataProps {
    totalItems: number;
    items: Array<BooksModel>;
}

export const useBookSearch = () => {

    const { searchQuery: query } = useFilter();

    const getBooks = async ({pageParam = 0}) => {
        const { data: res } = await axios.get(`${baseUrl}?q=${query}&startIndex=${pageParam}&maxResults=10`);
        return res;
    };

    const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage, refetch, isLoading, isFetching } = useInfiniteQuery(
        'books',
        getBooks,
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = lastPage?.totalItems / 10;
                const nextPage = reduceValue(allPages) + 1;
    
                const result = nextPage <= maxPages ? nextPage : undefined;
    
               return result;
            },
            enabled: !!query,
        }, 
    );

    useEffect(() => {
        query && refetch();
    }, [query]);

    console.log('isLoading', isLoading);
    console.log('isFetching', isFetching)

    return { books: data?.pages, isSuccess, isFetching, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage};
}