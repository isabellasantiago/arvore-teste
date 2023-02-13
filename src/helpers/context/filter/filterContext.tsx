import React, { createContext, useState, useContext} from 'react';
import { BooksModel, reduceValue } from '../..';
import { useBookSearch } from '../../../presentation/hooks';
import { FilterValues } from './filter-values.interface';


interface ContextProps{
    children: React.ReactNode;
}

type FilterContext = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    checkFilters: FilterValues;
    handleCheckFilter: (value: string, checked: boolean) => void;
    cleanFilter: () => void;
    books: Array<BooksModel>;
    dataLength: number;
}

type FilterKeys = keyof FilterValues;

const intialFilterValues = {
    maxPrice30: false,
    maxPrice50: false,
    maxPrice100: false,
    maxPriceMoreThan100: false,
    isAvailable: false,
    isUnavailable: false,
    epub: false,
    pdf: false,
}

export const FilterContext = createContext<FilterContext>({
    searchQuery: '',
    setSearchQuery: () => {},
    checkFilters: intialFilterValues,
    handleCheckFilter: (value ='', checked = false) => {},
    cleanFilter: () => {},
    books: [],
    dataLength: 0,
});

const filters = {
    maxPrice30: ({ saleInfo }: BooksModel) => saleInfo?.listPrice?.amount <= 30,
    maxPrice50: ({ saleInfo }: BooksModel) => saleInfo?.listPrice?.amount > 30 && saleInfo?.listPrice?.amount < 51,
    maxPrice100: ({ saleInfo }: BooksModel) => saleInfo?.listPrice?.amount > 51 && saleInfo?.listPrice?.amount < 101,
    maxPriceMoreThan100: ({ saleInfo }: BooksModel) => saleInfo?.listPrice?.amount > 100,
    isAvailable: ({ saleInfo }: BooksModel) => saleInfo?.saleability === 'FOR_SALE',
    isUnavailable: ({ saleInfo }: BooksModel) => saleInfo?.saleability === 'NOT_FOR_SALE',
    epub: ({ accessInfo: { epub }}: BooksModel) => epub.isAvailable,
    pdf: ({ accessInfo: { pdf }}: BooksModel) => pdf.isAvailable,
}


export const FilterContextProvider = ({children}: ContextProps) => {
    const [checkFilters, setCheckFilter] = useState<FilterValues>(intialFilterValues);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const {
        books: bookPages,
    } = useBookSearch();

    const books = bookPages?.flatMap((page) => page?.items) || [];
    const totalItems = bookPages?.flatMap(page => page?.totalItems) || [];
    const dataLength = reduceValue(totalItems, 'totalItems') || 0;

    const filteredBookList = books?.filter(book => {
        const keys = Object.keys(checkFilters);
        const values = Object.values(checkFilters);
        const keysCheckeds = keys.filter((_, index) => values[index]) as FilterKeys[];
        
        if(keysCheckeds.length === 0) return true;

        return keysCheckeds.some(key => filters[key](book));
    });

    const cleanFilter = () => {
        setCheckFilter(prev => ({
            ...prev,    
            intialFilterValues
        }))
    }
    const handleCheckFilter = (value: string, checked: boolean) => {
        console.log('check', value, checked)
        setCheckFilter(
            prev => ({
                ...prev,
                [value]: checked,
            })
        )
    }

    return (
        <FilterContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                checkFilters,
                handleCheckFilter,
                cleanFilter,
                books: filteredBookList,
                dataLength,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);

