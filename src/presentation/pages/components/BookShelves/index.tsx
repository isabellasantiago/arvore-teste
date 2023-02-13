import React, { useRef, useState } from 'react';
import { BookCard } from '../BookCard';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import * as S from './style';
import { BooksModel } from '../../../../helpers/books.model';

interface BookShelvesProps {
    widthSize: number;
    books: Array<BooksModel>;
    categoryTitle: string;
    isHighlight?: boolean;
}

export const BookShelves: React.FC<BookShelvesProps> = ({ widthSize, books, categoryTitle, isHighlight }) => {
    const [showLeft, setShowLeft] = useState(false);
    const size = widthSize > 700 && widthSize < 1600 ? 'tablet' : widthSize > 1600 ? 'desktop' : 'mobile';
    const carousel = useRef<HTMLDivElement>(null!);
    const images = books?.map((book) => {
        const { volumeInfo, id } = book;

        return { id , volumeInfo };
    })

    const handleClikPrevious = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleClikNext = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
        setShowLeft(true);
    }


    return (
        <S.Container
            widthSize={widthSize}
            isHighlight={isHighlight}
        >
            <S.CategoryTitle
             widthSize={widthSize}
             isHighlight={isHighlight}
            >
                {categoryTitle}
            </S.CategoryTitle>
                <S.BookList
                   widthSize={widthSize}
                >
                   <S.Arrow
                       widthSize={widthSize}
                       onClick={handleClikNext}
                   >
                       {widthSize < 1599 ? null : <Arrow /> }
                   </S.Arrow>
                   {showLeft && (
                    <S.Arrow
                        widthSize={widthSize}
                        leftArrow
                        onClick={handleClikPrevious}
                    >
                        {widthSize < 1600 ? null : <Arrow style={{ transform: 'rotate(180deg)'}}/> }
                    </S.Arrow>
                   )}
                   <S.ContainerBooks ref={carousel}>
                    {images?.map((image) => {
                        const { volumeInfo, id } = image;
                        const imgUrl = volumeInfo?.imageLinks?.thumbnail ? volumeInfo?.imageLinks?.thumbnail : volumeInfo?.imageLinks?.smallThumbnail
                        return(
                            <BookCard
                                imgLink={imgUrl}
                                key={id}
                                widthType={size}
                            />
                        )
                    })} 
                   </S.ContainerBooks>
                </S.BookList>
        </S.Container>
    )
}
