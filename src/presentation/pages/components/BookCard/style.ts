import styled from 'styled-components';

interface Props {
    width?: number;
    height?: number;
}

export const ImgContainer = styled.div<Props>`
    //desktop - w: 198 x h: 296
    //tablet - w: 124px x h: 185
    //mobile - w: 57px x h: 85
    width: ${props => props.width || '57px'};
    height: ${props => props.height || '85px'};
    flex: none;
`;

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;