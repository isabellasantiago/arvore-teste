import styled, {css} from 'styled-components';

interface Props{
    widthSize: number;
    textSize?: number;
}

export const MainContainer = styled.main`
    box-sizing: border-box;
    
    margin: 0;
    
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px 0 0 0;

    background-color: #fff;
`;

export const Text = styled.span<Props>`
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    font-size: ${props => props.textSize || '13px'};
    color: #B2B4B9;

    width: 190px;

    line-height: 16px;
    text-align: ${props => props.widthSize > 742 ? 'left' : 'center'};
    ${props => props.widthSize > 1648 ? css({
        whiteSpace: 'nowrap',
    }) : null}
`;

export const ChildrenContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`;