import styled, { css } from 'styled-components';

interface BookListProps {
    widthSize: number;
    leftArrow?: boolean;
    isHighlight?: boolean;
}

export const Container = styled.div<BookListProps>`
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    gap: ${props => props.widthSize < 500 ? '24px' : '22px'};
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: ${props => props.isHighlight ? '#DAF6F3' : 'none'};
`;


export const CategoryTitle = styled.span<BookListProps>`
    width: ${props => props.widthSize > 1600 ? '900px' : props.widthSize < 700 ? '295px' : '606px'};
    max-width: 1136px;
    box-sizing: border-box;
    margin: 0;
    padding: 10px 0 ;

    text-align: left;
    font-weight: 600;
    font-family: 'Inter', sans-serif;

    line-height: 100%;
    color: ${props => props.isHighlight ? '#A977D8' : '#000'};

    font-size: ${props => (props.widthSize > 1600 && props.isHighlight) ? '28px' :  (props.widthSize > 700 && props.widthSize < 1600 && props.isHighlight) ? '22px' : '16px'};
`;


export const BookList = styled.div<BookListProps>`
    width: ${props => props.widthSize > 1600 ? '900px' : props.widthSize > 700 && props.widthSize < 1600 ? '606px' : '295px'};
    height: 95%;
    max-height: ${props => props.widthSize > 1600 ? '300px': props.widthSize > 700 && props.widthSize < 1600 ? '258px' : '105px'};
    box-sizing: border-box;

    display: flex;
    flex-flow: row nowrap;
    align-items:'flex-start';
    justify-content: flex-start;

    position: relative;
`;

export const Arrow = styled.button<BookListProps>`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(0, -50%);
    border: none;
    ${props => props.leftArrow ? css({ left: 0}) : css({ right: 0 })};

    z-index: 1;
    cursor: pointer;

    ${props => props.widthSize < 1600 ? css({
        background: 'none',
        height: '100%',
        width: '8%',
        cursor: 'pointer',
        margin: '22px 0',
        top: '37%',
    }): css({
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#FFFFFF',
        top: '50%',
    })}
`;

export const ContainerBooks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
        display: none;
    }
`;