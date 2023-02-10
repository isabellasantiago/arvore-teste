import styled, { css } from 'styled-components';

interface Props {
    isHighlight?: boolean;
}

interface BookListProps {
    widthSize: number;
    leftArrow?: boolean;
}

export const Container = styled.div<Props>`
    width: 100%;
    padding: 0 13%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    background: ${props => props.isHighlight ? '#DAF6F3' : 'none'};
`;


export const CategoryTitle = styled.h3<Props>`
    width: 100%;
    box-sizing: border-box;
    
    text-align: left;
    font-weight: 600;
    font-family: 'Inter', sans-serif;;
    font-size: ${props => props.isHighlight ? '28px' : '16px'};
    line-height: 100%;
    color: ${props => props.isHighlight ? '#A977D8' : '#000'};
`;

export const BookList = styled.div<BookListProps>`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
    border: 1px solid green;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Arrow = styled.button<BookListProps>`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 25%;
    transform: translate(0, -50%);
    border: none;
    ${props => props.leftArrow ? css({ left: '0px'}) : css({ right: '0px'})};

    z-index: 1;
    cursor: pointer;
    border: 1px solid red;

    
    ${props => props.widthSize < 1600 ? css({
        background: 'none',
        height: '100%',
        width: '8%',
        cursor: 'pointer',
        margin: '22px 0',
    }): css({
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#FFFFFF',
    })}

`;