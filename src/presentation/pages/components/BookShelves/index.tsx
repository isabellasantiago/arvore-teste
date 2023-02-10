import React, { useRef, useEffect, useState } from 'react';
import { BookCard } from '../BookCard';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import * as S from './style';
import { BooksModel } from '../../../../books.model';

interface BookShelvesProps {
    widthSize: number;
    books: Array<BooksModel>;
}

const link = 'https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg'

export const BookShelves: React.FC<BookShelvesProps> = ({ widthSize, books }) => {
    const carousel = useRef<HTMLDivElement>(null!);
    console.log('books', books)
    const images = books?.map((book) => {
        const { volumeInfo } = book;

        return volumeInfo.imageLinks.thumbnail;
    })

    const handleClikPrevious = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
        
    }
    const handleClikNext = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }


    return (
        <S.Container>
            <S.CategoryTitle>Ação</S.CategoryTitle>
            <S.BookList
               ref={carousel}
               widthSize={widthSize}
            >
                <S.Arrow 
                    widthSize={widthSize}
                    onClick={handleClikNext}
                >
                    {widthSize < 1599 ? null : <Arrow /> }
                </S.Arrow>
                <S.Arrow
                    widthSize={widthSize}
                    leftArrow
                    onClick={handleClikPrevious}
                >
                    {widthSize < 1600 ? null : <Arrow style={{ transform: 'rotate(180deg)'}}/> }
                </S.Arrow>
                {images?.map((image) => {
                    const index = Math.random();
                    return(
                        <BookCard
                            imgLink={image}
                            key={index}
                        />   
                    )
                })}
            </S.BookList>
        </S.Container>
    )
}