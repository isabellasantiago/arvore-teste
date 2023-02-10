import React from 'react';
import * as S from './style';


interface BookCadProps {
    width?: number;
    height?: number;
    imgLink: string;
}
export const BookCard: React.FC<BookCadProps> = ({
    width,
    height,
    imgLink
}) => {
    return (
        <S.ImgContainer>
            <S.ImgCard
                src={imgLink}
                width={width}
                height={height}
            />
        </S.ImgContainer>
    )
}