import styled from 'styled-components';

interface Props {
    width: number;
    height: number;
}

export const ImgCard = styled.img<Props>`
    //desktop - w: 198 x h: 296
    //tablet - w: 124px x h: 185
    //mobile - w: 57px x h: 85

    width: ${props => props.width || '57px'};
    height: ${props => props.height || '85px'};

    box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
    border-radius: 8px 16px 16px 8px;
`;