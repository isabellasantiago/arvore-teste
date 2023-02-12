import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFilter } from '../../../helpers/context';
import { PagePattern } from '../components';
import { BookCard } from '../components/BookCard';
import { FilterButton } from '../components/FilterButton';
import { useBookSearch } from '../../hooks/useBookSearch';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as S from './style';
import { FilterSection } from '../components/FilterSection';


export const SearchPage: React.FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    console.log('showFilter', showFilter);
    const { width } = useWindowSize();
    const { searchQuery } = useFilter();
    const { books, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage = true } = useBookSearch();

    console.log('is fetching', isFetchingNextPage);

    const booksItems = books?.flatMap((page) => page?.items);
    const conditionBooksItems = !!booksItems ? booksItems.length : 0
    const totalItems = books?.flatMap(page => page?.totalItems);
    const conditionTotalItems = !!totalItems ? totalItems[0] : 0

    const onScrollBottom = useCallback(() => {
        fetchNextPage();
    }, [JSON.stringify(books)]);


    const mobile = (
        <S.Container
            widthSize={width}
        >
            <S.SearchString>
                    {`Resultados para "${searchQuery}":`}
            </S.SearchString>
            <S.ButtonArea>
                <FilterButton
                    onClick={() => setShowFilter(true)} 
                    widthSize={width}
                    buttonType='filter'
                />
            </S.ButtonArea>
                <S.BooksContainer
                    widthSize={width}>
                    {isSuccess &&                    
                        booksItems?.map((book, index) => {
                            const { volumeInfo : {
                                authors,
                                imageLinks,
                                title
                            }, id} = book;

                            return(
                                <S.BookCardArea
                                    key={id}
                                    widthSize={width}
                                >
                                    <BookCard
                                        imgLink={imageLinks ? imageLinks.thumbnail : ''}
                                        widthType='tablet'
                                        hasShadow
                                        borderRadius='6px 12px 12px 6px'
                                    />
                                    <S.TitleOrAuthor type='title'>{title ?? '-'}</S.TitleOrAuthor>
                                    <S.TitleOrAuthor type='author'>{authors ?? '-'}</S.TitleOrAuthor>
                                </S.BookCardArea>                   
                    )})}
            </S.BooksContainer>
            {showFilter && (
                    <FilterSection
                        setShowFilter={setShowFilter}
                        showFilter={showFilter}
                    />
            )}
        </S.Container>
    );

    const others = (
        <S.Container
            widthSize={width}
        >
            <S.OthersTypeDiv
                widthSize={width}
            >
                <FilterSection
                    setShowFilter={setShowFilter}
                    showFilter={showFilter}
                />
            </S.OthersTypeDiv>
            <S.OthersTypeDiv
                widthSize={width}
            >
                <S.SearchString>
                        {`Resultados para "${searchQuery}":`}
                </S.SearchString>
                    <S.BooksContainer
                        widthSize={width}
                    >
                        {isSuccess &&
                            booksItems?.map((book, index) => {
                                const { volumeInfo : {
                                    authors,
                                    imageLinks,
                                    title
                                }, id} = book;
                                return(
                                    <S.BookCardArea
                                        widthSize={width}
                                        key={id}
                                    >
                                        <BookCard
                                            imgLink={imageLinks ? imageLinks.thumbnail : ''}
                                            widthType='tablet'
                                            hasShadow
                                            borderRadius='6px 12px 12px 6px'
                                        />
                                        <S.TitleOrAuthor type='title'>{title ?? '-'}</S.TitleOrAuthor>
                                        <S.TitleOrAuthor type='author'>{authors ?? '-'}</S.TitleOrAuthor>
                                    </S.BookCardArea>
                        )})}
                </S.BooksContainer>
            </S.OthersTypeDiv>
        </S.Container>

    );


    return(
        <PagePattern>
            {width < 450 ? mobile : others}
        </PagePattern>
    )
}
