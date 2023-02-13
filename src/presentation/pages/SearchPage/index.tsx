import React, { CSSProperties, useCallback, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFilter } from '../../../helpers/context';
import { reduceValue } from '../../../helpers/factory';
import { BooksModel } from '../../../helpers';
import {
    FilterSection,
    FilterButton,
    PagePattern,
    BookCard
} from '../components';
import { useBookSearch, useWindowSize } from '../../hooks';
import * as S from './style';


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
}

export const SearchPage: React.FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { width } = useWindowSize();
    const { searchQuery } = useFilter();
    const { books, isSuccess, fetchNextPage, hasNextPage = true, isLoading } = useBookSearch();

    const booksItems = books?.flatMap((page) => page?.items);
    const totalItems = books?.flatMap(page => page?.totalItems);
    const conditionTotalItems = totalItems ?  reduceValue(totalItems, 'totalItems') : 0;

    const onScrollBottom = useCallback(() => {
        fetchNextPage();
    }, [JSON.stringify(books)]);

    const loader = (
        <ClipLoader
            color='#9EAEB7'
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
        />
    )

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
                            loader={loader}
                            endMessage={<p>That's all folks!</p>}
                            scrollableTarget="scrollableDiv"
                            className='infinite-scroll'
                        >
                        {booksItems !== undefined &&
                            booksItems?.map((book) => {
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
                isFilter
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
                        id='scrollableDiv'
                    >
                         <InfiniteScroll
                            dataLength={conditionTotalItems}
                            next={onScrollBottom}
                            hasMore={hasNextPage}
                            loader={loader}
                            endMessage={<p>That's all folks!</p>}
                            scrollableTarget="scrollableDiv"
                            className='infinite-scroll'
                        >
                            {isSuccess &&
                                booksItems?.map((book: BooksModel) => {
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
                        </InfiniteScroll>
                </S.BooksContainer>
            </S.OthersTypeDiv>
        </S.Container>

    );


    return(
        <PagePattern>
            {isLoading ? loader : width < 450 ? mobile : others}
        </PagePattern>
    )
}
