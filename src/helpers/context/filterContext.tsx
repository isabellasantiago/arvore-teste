import React, { createContext, useState, useMemo, useContext} from 'react';


interface ContextProps{
    children: React.ReactNode;
}

type FilterContext = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    startIndex: number;
    setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterContext = createContext<FilterContext>({
    searchQuery: '',
    setSearchQuery: () => {},
    startIndex: 0,
    setStartIndex: () => {},
});


export const FilterContextProvider = ({children}: ContextProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [startIndex, setStartIndex]= useState<number>(0);

    return (
        <FilterContext.Provider value={{searchQuery, setSearchQuery, startIndex, setStartIndex }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);

