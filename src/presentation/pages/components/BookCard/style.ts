import styled from 'styled-components';

interface Props {
    width?: string | null;
    height?: string | null;
}


export const ImgContainer = styled.div<Props>`
    width: ${props => props.width || '57px'};
    height: ${props => props.height || '85px'};

    flex: none;
    padding: 1px;
    cursor: pointer;
`;

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    background: rgba(178, 180, 185, 0.2);
`;