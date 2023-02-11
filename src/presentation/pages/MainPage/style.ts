import styled from 'styled-components';

interface Props {
    widthSize: number;
}

export const MainContainer = styled.div<Props>`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.widthSize < 700 ? '100%' : null};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${props => props.widthSize < 500 ? '5px' : '15px'};
`;