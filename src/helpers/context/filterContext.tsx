import React, { createContext, useState, useMemo} from 'react';
import { useQuery } from 'react-query';
import { BooksModel } from '../books.model';
import { fetchBooks } from '../fetchBooks';

interface ContextProps{
    children: React.ReactNode;
}

type FilterContext = {
    searchQuery: string | null;
    setSearchQuery: React.Dispatch<React.SetStateAction<string | null>>;
    books: Array<BooksModel>;
    initialBooks: Array<BooksModel>;
}

export const FilterContext = createContext<FilterContext>({
    searchQuery: '',
    setSearchQuery: () => {},
    books: [],
    initialBooks: [],
});

//https://www.googleapis.com/books/v1/volumes?q=+subject:detach

export const FilterContextProvider = ({children}: ContextProps) => {
    const [searchQuery, setSearchQuery] = useState<string | null>('');

    const { data } = useQuery('books', async () => await fetchBooks(`q=${searchQuery}`));
    // const { data: initialCategoryBooks } = useQuery('booksByCategories', async () => await fetchBooks(``));
    // console.log('items',initialCategoryBooks?.items)
    const books = useMemo(() => data?.items, [searchQuery]);
    const initialBooks = [] as Array<BooksModel>
    return (
        <FilterContext.Provider value={{searchQuery, setSearchQuery, books, initialBooks}}>
            {children}
        </FilterContext.Provider>
    )
}

// export const filterContext = useContext(FilterContext)
