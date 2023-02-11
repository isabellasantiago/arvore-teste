import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FilterContext } from '../../../../helpers/context/filterContext';
import { fetchBooks } from '../../../../helpers/fetchBooks';
import * as S from './style';


interface FilterBarProps {
    widthSize: number
}

export const FilterBar: React.FC<FilterBarProps> = ({ widthSize}) => {
    const [search, setSearch] = useState('');
    const filterContext = useContext(FilterContext);
    const { searchQuery, setSearchQuery } = filterContext;


    const searchBook = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            console.log(search)
            setSearchQuery(search);
        }
    }

    const searchBookByClick = (e: React.MouseEvent) => {
        
    }


    return (
        <>
            <S.BarContainer widthSize={widthSize}>
                <S.BarInput
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={searchBook}
                />
                <SearchIcon sx={{ color: '#406A76'}}

                />
            </S.BarContainer>
        </>
    )
}