import styled, { css } from 'styled-components';

interface ContainerProps {
    widthSize: number;
}
export const Container = styled.div<ContainerProps>`
    box-sizing: border-box;
    padding: 4px;

    width: ${props => props.widthSize < 745 ? css({
        width: '36px',
        height: '36px',
    }) : css({
        width: '170px',
        height: '44px',
        display: 'flex',
        flexFlow: "row nowrap",
        alignItems: "center",
        justifyContent:"center",
        gap: "12px",
    })};
`;

export const NameContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 5px;

    height: 40px;
    width: 137px;
    padding: 12px;

    > :last-child {
        margin-top: 2px;
    }
`;

export const ProfilePic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    object-fit: cover;
`;

export const Name = styled.span`
    font: 700 16px "Inter", sans-serif;
    color: rgba(64, 106, 118, 1);
    text-transform: capitalize;
    text-align: center;
    line-height: 16px;
`;