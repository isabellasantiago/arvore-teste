import styled, {css} from 'styled-components';

interface Props{
    widthSize: number;
    textSize?: number;
}

interface BtnProps {
    width?: string;
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

export const Footer = styled.footer<Props>`
    box-sizing: border-box;

    width: 100%;
    border-top: 0.5px solid rgba(217, 217, 217, 1);

    display: flex;
    align-items: center;

    ${props => props.widthSize > 1679 ? css({
        height: '100px',
        justifyContent: 'space-evenly',
    }) : props.widthSize > 742 ? css({
        height: '82px',
        padding: '12px 8px',
        justifyContent: 'space-evenly',

    }) : css({
        height: '76px',
        padding: '20px 30px',
        justifyContent: 'center',
    })}

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

export const FooterRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

`;

export const Button = styled.button<BtnProps>`
    height: 40px;
    padding: 12px 16px;
    width: ${props => props.width || '206px'};

    font: 500 16px 'Inter', sans-serif;
    line-height: 16px;
    color: #B2B4B9;
    white-space: nowrap;

    border: 1px solid rgba(178, 180, 185, 1);
    border-radius: 8px;
    background: none;

    cursor: pointer;
    
`;

export const ChildrenContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`;