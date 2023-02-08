import styled, { css } from 'styled-components';

interface Props {
    isHighlight?: boolean;
}


export const Container = styled.div<Props>`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    background: ${props => props.isHighlight ? '#DAF6F3' : 'none'};
`;

export const CategoryTitle = styled.h3<Props>`
    font: 600 'Inter', sans-serif;
    font-size: ${props => props.isHighlight ? '28px' : '16px'};
    line-height: 100%;
    color: ${props => props.isHighlight ? '#A977D8' : '#000'};
`;