import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
    titleType: 'header' | 'filter',
}

interface Props {
    widthSize: number;
}

export const Section = styled(motion.div)<Props>`
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    max-width: 308px;
    height: 100%;

    display: flex;
    align-items: ${props => props.widthSize < 450 ? 'flex-start' : 'center'};
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;

    ${ props => props.widthSize < 450 ? css({
        alignItems: 'flex-start',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        maxWidth: '100%',
        padding: '30px 16px',
    }) : css({
        alignItems: 'center',
        zIndex: 0,
        position: 'static'
    })}
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Title = styled.span<TitleProps>`
    font-weight: 600;
    font-family: 'Inter';
    font-size: ${props => props.titleType === 'header' ? '16px' : '14px'};
    color: ${props => props.titleType === 'header' ? '#000' : '#9EAEB7'};
    margin: 0;
`;

export const FilterContainer = styled.div`
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 22px;
`;

export const BtnArea = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 172px;
`;