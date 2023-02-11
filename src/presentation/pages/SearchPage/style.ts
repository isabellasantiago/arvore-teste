import styled, { css } from 'styled-components';

interface TitleProps {
    type: 'title' | 'author';
}

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 8px 10%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 27px;
`;


export const SearchString = styled.span`
    width: 100%;
    margin: 0;
    
    font: 600 16px 'Inter', sans-serif;
    text-align: left;
`;

export const ButtonArea = styled.div`
    box-sizing: border-box;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

`;

export const BooksContaienr = styled.div`
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const BookCardArea = styled.div`
    box-sizing: border-box;
    width: 136px;
    height: 245px;

    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const TitleOrAuthor = styled.span<TitleProps>`
    text-align: left;

    ${props => props.type === 'title' ? css({
        font: '600 12px Inter',
        color: '#000',
    }) : css({
        font: '400 10px Inter',
        color: '#999999',
    })}
`;