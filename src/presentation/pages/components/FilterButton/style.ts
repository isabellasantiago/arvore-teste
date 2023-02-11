import styled, { css } from 'styled-components';
import { ButtonFilterEnum } from '../../../../common/enums/button-filter-type.enum';

interface Props {
    buttonType?: ButtonFilterEnum;
}

export const FilterButton = styled.button<Props>`
    box-sizing: border-box;
    border: none;
    font: 600 16px 'Inter', sans-serif;
    text-transform: uppercase;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 100%;
    height: 55px;

    border-radius: 10px;
    cursor: pointer;
    background: #8553F4;
`;

export const CleanFilterButton = styled(FilterButton)`
    background: #ADB7BF;
    border: 1px solid rgba(64, 106, 118, 0.2);
    ${props => props.buttonType === ButtonFilterEnum.CLEAN_FILTER_DESKTOP ?
        css({
            gap:'29px',
            width: '136px',
            height: '30px'
        }) : css({
            fontSize: '12px',
            gap:'12px',
            width: '136px',
            height: '30px'
        })
    }
`