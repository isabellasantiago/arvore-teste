import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { baseUrl, BooksModel, fetchBooks} from '../../helpers';



interface Props {
    query: string | null;
    pageNumber: number;
}

interface DataProps {
    totalItems: number;
    items: Array<BooksModel>;
}

export const useBookSearch = ({query, pageNumber}: Props) => {
    const books = async () => {
        const { data:res } = await axios.get(`${baseUrl}?q=${query}&startIndex=${pageNumber}&maxResults=20`)
        return res;
    };

    const { data, fetchNextPage, hasNextPage, isLoading, error } = useInfiniteQuery('books', {
        getNextPageParam: (lastPage, pages) => (page.current)
    })


    return {};
}