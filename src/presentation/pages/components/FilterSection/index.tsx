import React, { useState } from 'react';
import {ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useFilter, FilterValues } from '../../../../helpers/context/filter';
import { CheckboxButton, FilterButton, Footer } from '../';

import * as S from './style';



interface Props {
    showFilter: boolean;
    showCleanBtn: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
    setShowCleanBtn: React.Dispatch<React.SetStateAction<boolean>>
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

export const FilterSection: React.FC<Props> = ({ setShowFilter, showCleanBtn,  setShowCleanBtn }) => {
    const { width } = useWindowSize();
    const { checkFilters, handleCheckFilter, cleanFilter } = useFilter();
    const delay = width < 650 ? 0.2 : 0;
    const duration = width < 650 ? 1 : 0;

    const handleClickFilters = (value: string, checked: boolean) => {
        handleCheckFilter(value, checked)
        setShowCleanBtn(true);
    }

    const renderCheckboxList = filterOptionsText.map(({title, id, options}) => {
        return(
            <S.FilterContainer key={id}>
                <S.Title titleType='filter'>{title}</S.Title>
                {options.map(({text, value}) => {
                    const keyTyped = value as keyof FilterValues;
                    return(
                        <CheckboxButton
                            key={value}
                            label={text}
                            value={value}
                            checked={checkFilters[keyTyped]}
                            onChange={() => handleClickFilters(value, !checkFilters[keyTyped])}
                        />
                    )
                })}
            </S.FilterContainer>
        )
    })

    const handleClick = () => {
        setShowCleanBtn(true)
        setShowFilter(false)
    }

    const handleCleanClick = () => {
        setShowCleanBtn(false);
        cleanFilter();
    }

    return (
            <S.Section
                initial={{ x: -1900}}
                animate={{ x: 0 }}
                transition={{ delay, duration }}
                widthSize={width}
            >
                <S.HeaderArea>
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
                    {showCleanBtn && (
                        <FilterButton
                            setShowCleanBtn={setShowCleanBtn}                           
                            buttonType='cleanFilter'
                            widthSize={width}
                            onClick={handleCleanClick}
                        />
                    )}
                </S.HeaderArea>
                {renderCheckboxList}
                {width < 650 && (
                    <>
                        <S.BtnArea>
                            <FilterButton
                                setShowCleanBtn={setShowCleanBtn} 
                                buttonType='filter'
                                widthSize={width}
                                isFilterNow
                                onClick={handleClick}
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