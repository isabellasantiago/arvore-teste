import React, { MouseEventHandler } from 'react';
import { ButtonFilterEnum } from '../../../../common/enums/button-filter-type.enum';
import { ReactComponent as FilterIcon } from '../../../assets/filter-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import * as S from './style';

interface ButtonProps {
    buttonType: 'filter' | 'cleanFilter';
    widthSize: number;
    isFilterNow?: boolean;
    onClick: MouseEventHandler;
    setShowCleanBtn: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterButton: React.FC<ButtonProps> = ({
    widthSize,
    buttonType,
    isFilterNow,
    onClick,
    setShowCleanBtn
}) => {
    const btnType = widthSize > 700 && widthSize < 1600 ? ButtonFilterEnum.CLEAN_FILTER_TABLET : widthSize > 1600 ? ButtonFilterEnum.CLEAN_FILTER_DESKTOP : undefined; 
    const filterButton = (
        <>
            <S.FilterButton
                onClick={onClick}
            >
                <FilterIcon />
                {isFilterNow ? 'filtrar agora' : 'filtrar'}
            </S.FilterButton>
        </>
    )

    const cleanFilterButton = (
        <>
            <S.CleanFilterButton buttonType={btnType}>
                limpar filtro
                {widthSize > 700 && widthSize < 1600 ?
                    <CloseIcon width='8px' height='8px' onClick={() => setShowCleanBtn(false)}/> :
                    widthSize > 1600 && 
                    <CloseIcon width='10px' height='10px' onClick={() => setShowCleanBtn(false)}/>
                }
            </S.CleanFilterButton>
        </>
    )

    const whichButton = buttonType === 'filter' ? filterButton : cleanFilterButton

    return (<>{whichButton}</>);
}