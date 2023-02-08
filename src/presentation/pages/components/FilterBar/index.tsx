import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './style';


interface FilterBarProps {
    widthSize: number
}

export const FilterBar: React.FC<FilterBarProps> = ({ widthSize}) => {
    return (
        <>
            <S.BarContainer widthSize={widthSize}>
                <S.BarInput type="text" placeholder='Search'/>
                <SearchIcon sx={{ color: '#406A76'}}/>
            </S.BarContainer>
        </>
    )
}