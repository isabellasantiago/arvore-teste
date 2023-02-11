import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useFilter } from '../../../../helpers/context/';
import * as S from './style';


interface FilterBarProps {
    widthSize: number
}

export const FilterBar: React.FC<FilterBarProps> = ({ widthSize}) => {
    const [search, setSearch] = useState('');
    const { setSearchQuery, setStartIndex } = useFilter();


    const searchBook = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            setSearchQuery(search);
            setStartIndex(0);
        }
    }

    const searchBookByClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setSearchQuery(search);
    }

    console.log('search', search)


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
                <SearchIcon sx={{ color: '#406A76'}} onClick={searchBookByClick}/>
            </S.BarContainer>
        </>
    )
}