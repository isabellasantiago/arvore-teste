import React, { useState } from 'react';
import {ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useFilter, FilterValues } from '../../../../helpers/context/filter';
import { CheckboxButton, FilterButton, Footer } from '../';

import * as S from './style';



interface Props {
    showFilter: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const filterOptionsText = [
    {
        id: 1,
        title: 'Preço',
        options: [
            { 
                text: 'de R$0 até R$30',
                value: 'maxPrice30'
            },
            { 
                text: 'de R$31 até R$50',
                value: 'maxPrice50'
            },
            { 
                text: 'de R$51 até R$100',
                value: 'maxPrice100'
            },
            { 
                text: 'Mais de R$100',
                value: 'maxPriceMoreThan100'
            },
        ]
    },
    {
        id: 2,
        title: 'Disponibilidade para venda',
        options: [
            {
                text: 'Disponível',
                value: 'isAvailable'
            },
            { 
                text: 'Indisponível',
                value: 'isUnavailable'
            }
        ]
    },
    {
        id: 3,
        title: 'Formatos disponíveis',
        options: [
            { 
                text: 'e-pub',
                value: 'epub'
            },
            { 
                text: 'PDF',
                value: 'pdf'
            }
        ]
    }
]

export const FilterSection: React.FC<Props> = ({ setShowFilter, showFilter }) => {
    const [checked, setChecked] = useState([]);
    const { width } = useWindowSize();
    const { checkFilters, handleCheckFilter, cleanFilter } = useFilter();
    const delay = width < 650 ? 0.3 : 0;
    const duration = width < 650 ? 1 : 0;

    const renderCheckboxList = filterOptionsText.map(({title, id, options}) => {
        return(
            <S.FilterContainer key={id}>
                <S.Title titleType='filter'>{title}</S.Title>
                {options.map(({text, value}) => {
                    const keyTyped = value as keyof FilterValues;
                    console.log('keyTyped', keyTyped)
                    return(
                        <CheckboxButton
                            label={text}
                            value={value}
                            checked={checkFilters[keyTyped]}
                            onChange={() => handleCheckFilter(value, checkFilters[keyTyped])}
                        />
                    )
                })}
            </S.FilterContainer>
        )
    })

    return (
        <>
        {showFilter && (
            <S.Section
                initial={{ x: -1900}}
                animate={{ x: 0 }}
                transition={{ delay, duration }}
                widthSize={width}
            >
                <S.Header>
                    <S.Title titleType='header'>Filtrar</S.Title>
                    {width < 450 ? (
                    <CloseIcon
                        width='9px'
                        height='9px'
                        style={{ backgroundColor: '#fff', cursor: 'pointer' }}
                        onClick={() => setShowFilter(false)}
                    />
                    ) : null}
                </S.Header>
                {renderCheckboxList}
                {width < 650 && (
                    <>
                        <S.BtnArea>
                            <FilterButton 
                                buttonType='filter'
                                widthSize={width}
                                isFilterNow
                                onClick={() => setShowFilter(false)}
                            />
                        </S.BtnArea>
                        <Footer 
                            showRightContainer={false}
                        />
                    </>
                )}
            </S.Section>
        )}
        </>
    )
}