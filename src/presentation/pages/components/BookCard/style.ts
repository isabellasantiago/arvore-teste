import styled from 'styled-components';

interface Props {
    width?: string | null;
    height?: string | null;
    hasShadow?: boolean;
    borderRadius?: string;
}


export const ImgContainer = styled.div<Props>`
    width: ${props => props.width || '57px'};
    height: ${props => props.height || '85px'};

    flex: none;
    padding: 1px;
    cursor: pointer;
`;

export const ImgCard = styled.img<Props>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.borderRadius || '8px'};
    background: rgba(178, 180, 185, 0.2);
    box-shadow: ${props => props.hasShadow && ' 0px 8px 10px 1px rgba(5, 59, 75, 0.06)'};
`;