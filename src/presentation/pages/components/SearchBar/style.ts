import styled, { css } from 'styled-components';

interface Props {
    widthSize: number;
}

export const BarContainer = styled.div<Props>`
    width: ${ props => props.widthSize < 733 ? '287px' : 
    props.widthSize > 1679 ? '1134px' : '440px' };
    height: 35px;
    position: relative;

    border-radius: 20px;
    border: 1px solid #DEE1E6;
    background-color: #F1F7FC;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 7px;

    cursor: pointer;
`;

export const BarInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding-left: 7px;
    
    
    &, &::placeholder {
        font: 400 16px 'Inter', sans-serif;
        color: #406A76;
        line-height: 100%;
    }

    &:focus{
        outline: 0;
    }

    cursor: pointer;
    
`;