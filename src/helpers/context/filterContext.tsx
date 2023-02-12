import React, { createContext, useState, useMemo, useContext} from 'react';


interface ContextProps{
    children: React.ReactNode;
}

type FilterContext = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    hasFilter: boolean;
    setHasFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterContext = createContext<FilterContext>({
    searchQuery: '',
    setSearchQuery: () => {},
    hasFilter: false,
    setHasFilter: () => {},
});


export const FilterContextProvider = ({children}: ContextProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    console.log('searchQuery', searchQuery)

    const [hasFilter, setHasFilter]= useState<boolean>(false);


    return (
        <FilterContext.Provider value={{searchQuery, setSearchQuery, hasFilter, setHasFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);

