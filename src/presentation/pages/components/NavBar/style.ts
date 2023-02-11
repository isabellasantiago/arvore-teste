import styled, { css } from 'styled-components';

interface Props{
    widthSize: number;
}

export const NavBar = styled.nav<Props>`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;

    ${props => props.widthSize > 700 ? css({
        height: '70px',
        padding: '12px 26px',
        justifyContent: 'space-between',
        maxWidth: '1680px',
    }) : css({
        padding: '12px 16px',
        justifyContent: 'space-between',
    })};

    border-bottom: 1px solid rgba(241, 247, 252, 1);
`;

export const NotificationContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const MobileContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;

    width: 100%;
`;

export const NotficationIconArea = styled.div`
    position: relative;
    width: 23px;
    height: 20px;

    cursor: pointer;
`;

export const Bubble = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #FF5267;
    border: 1px solid #FFFFFF;
    z-index: 1;

    
    top: 0;
    right: 0;
`;