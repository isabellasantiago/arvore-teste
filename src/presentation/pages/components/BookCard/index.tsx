import React from 'react';
import * as S from './style';


interface BookCadProps {
    widthType?: "tablet" | "desktop" | "mobile";
    imgLink: string;
    hasShadow?: boolean;
    borderRadius?: string;
}
export const BookCard: React.FC<BookCadProps> = ({
    widthType,
    imgLink,
    hasShadow,
    borderRadius,
}) => {
    const size = widthType === 'tablet' ? {
        width: '124px',
        height: '185px'
    } : widthType === 'desktop' ? {
        width: '198px',
        height: '296px'
    } : undefined;

    return (
        <S.ImgContainer
            width={size?.width}
            height={size?.height}
        >
            <S.ImgCard
                src={imgLink}
                hasShadow={hasShadow}
                borderRadius={borderRadius}
            />
        </S.ImgContainer>
    )
}