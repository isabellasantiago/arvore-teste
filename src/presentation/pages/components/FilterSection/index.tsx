import React, { useState } from 'react';
import {ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { CheckboxButton, FilterButton, Footer } from '../';

import * as S from './style';

const filterTypes = [
    {
        title: 'Preço',
        options: [
            {
                text: 'de R$0 até R$30',
                value: 30
            },
            {
                text: 'de R$31 até R$50',
                value: 50
            },
            {
                text: 'de R$51 até R$100',
                value: 100
            },
            {
                text: 'Mais de R$100',
                value: 9999999999,
            },
        ]
    },
    {
        title: 'Disponibilidade para venda',
        options: [
            {
                text: 'Disponível',
                value: 'FOR_SALE',
            },
            {
                text: 'Indisponível',
                value: 'NOT_FOR_SALE'
            }
        ]
    },
    {
        title: 'Formatos disponíveis',
        options: [
            {
                text: 'e-pub',
                value: 'e-pub'
            },
            {
                text: 'PDF',
                value: 'pdf'
            }
        ]
    }
]

interface Props {
    showFilter: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterSection: React.FC<Props> = ({ setShowFilter }) => {
    const [optValue, setOptValue] = useState();
    const { width } = useWindowSize();
    const delay = width < 450 ? 0.3 : 0;
    const duration = width < 450 ? 1 : 0;
    return (
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
            {filterTypes.map(({title, options}) => {
                return(
                    <S.FilterContainer>
                        <S.Title titleType='filter'>{title}</S.Title>
                        {options.map((opt) => {
                            return(
                                <CheckboxButton
                                    label={opt.text}
                                    
                                />
                            )
                        })}
                    </S.FilterContainer>
                )
            })}
            {width < 520 && (
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
    )
}