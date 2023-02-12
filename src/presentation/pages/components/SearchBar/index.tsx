import React, { useCallback, useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useFilter } from '../../../../helpers/context';
import * as S from './style';


interface SearchBarProps {
    widthSize: number
}

export const SearchBar: React.FC<SearchBarProps> = ({ widthSize}) => {
    const [search, setSearch] = useState('');
    const { setSearchQuery } = useFilter();


    const searchBook = useCallback((e: React.KeyboardEvent) => {
            if(e.key === 'Enter'){
                setSearchQuery(search);
            }
    }, [search])

    const searchBookByClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setSearchQuery(search);
    }, [search]);


    return (
        <>
            <S.BarContainer widthSize={widthSize}>
                <S.BarInput
                    type="search"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={searchBook}
                />
                <SearchIcon sx={{ color: '#406A76'}} onClick={searchBookByClick}/>
            </S.BarContainer>
        </>
    )
}