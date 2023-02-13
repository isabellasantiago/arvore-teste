import styled, { css } from 'styled-components';

interface TitleProps {
    type: 'title' | 'author';
}

interface Props {
    widthSize: number;
    isFilter?: boolean;
}

export const Container = styled.div<Props>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 8px 5%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 27px;

    ${props => props.widthSize > 650 && css({
        flexDirection: 'row',
        gap: '5px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '10px',
    })}
`;

export const OthersTypeDiv = styled(Container)<Props>`
    box-sizing: border-box;
    height: 100%;
    width: 745px;
    display: flex;
    flex-direction: column ;


    ${props => props.widthSize > 700 && props.widthSize < 1600 && css({
        maxWidth: '350px',
    })}
    ${props => props.widthSize > 1600 && css({
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width: '800px',
    })}

    ${props => props.isFilter && css({
        width:'240px'
    })}
    
    
`;


export const SearchString = styled.span`
    width: 100%;
    margin: 0;
    
    font: 600 16px 'Inter', sans-serif;
    text-align: left;

    white-space: nowrap;
`;

export const ButtonArea = styled.div`
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

`;

export const BooksContainer = styled.div<Props>`
    &, .infinite-scroll {
        box-sizing: border-box;
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;

        overflow-y: scroll;

        ::-webkit-scrollbar{
            display: none;
        }

        ${props => props.widthSize > 370  && props.widthSize < 700 && css({
            justifyContent: 'space-evenly',
        })}

        ${props => props.widthSize > 700 && props.widthSize < 1600 && css({
            height: '100%',
            gap: '0px 25px',
            paddingTop: '23px',
        })}

        ${props => props.widthSize > 1600 && css({
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '18px',
            paddingTop: '23px',
        })}
    }
`;

export const BookCardArea = styled.div<Props>`
    box-sizing: border-box;
    width: 136px;
    height: 245px;

    display: flex;
    flex-direction: column;
    gap: 7px;

    ${props => props.widthSize > 700 && css({
        gap: '5px',
        marginBottom: '10px'
    })}
`;

export const TitleOrAuthor = styled.span<TitleProps>`
    text-align: left;
    white-space: wrap;

    ${props => props.type === 'title' ? css({
        font: '600 12px Inter',
        color: '#000',
    }) : css({
        font: '400 10px Inter',
        color: '#999999',
    })}
`;

export const FilterArea = styled.div`
    width: 308px;
    background-color: #fff;
`;