import React, { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFilter } from '../../../helpers/context';
import { PagePattern } from '../components';
import { BookCard } from '../components';
import { FilterSection } from '../components/FilterSection';
import { FilterButton } from '../components/FilterButton';
import { useBookSearch } from '../../hooks/useBookSearch';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as S from './style';
import { reduceValue } from '../../../helpers/factory/reduced';

const defaultStyled = {
    boxSizing: 'border-box',
    width: '100%',

    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',

    overflowY: 'scroll',

    '::-webkit-scrollbar': {
        display: 'none',
    }
}


export const SearchPage: React.FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { width } = useWindowSize();
    const { searchQuery } = useFilter();
    const { books, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage = true } = useBookSearch();

    const infiniteStyle = width > 700 ? ({
        ...defaultStyled,
        height: '100%',
        gap: '28px',
        paddingTop: '23px',
    }) : width > 1600 && ({
        ...defaultStyled,
        alignItems: 'flex-start',
        gap: '18px',
        paddingTop: '33px',
    })


    const booksItems = books?.flatMap((page) => page?.items);
    // const conditionBooksItems = !!booksItems ? booksItems.length : 0
    const totalItems = books?.flatMap(page => page?.totalItems);
    const conditionTotalItems = totalItems ?  reduceValue(totalItems, 'totalItems') : 0;

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
                        widthSize={width}
                        id="scrollableDiv"
                    >
                        <InfiniteScroll
                            dataLength={conditionTotalItems}
                            next={onScrollBottom}
                            hasMore={hasNextPage}
                            loader={<h4>Loading....</h4>}
                            endMessage={<p>That's all folks!</p>}
                            scrollableTarget="scrollableDiv"
                            style={infiniteStyle}
                        >
                        {booksItems !== undefined &&
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
                        </InfiniteScroll>
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
