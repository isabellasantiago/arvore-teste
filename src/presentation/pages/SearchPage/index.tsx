import React, { CSSProperties, useCallback, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from 'react-infinite-scroll-component';
import BeatLoader from 'react-spinners/BeatLoader';
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
    const { searchQuery, books, dataLength } = useFilter();
    const {
        isSuccess,
        fetchNextPage,
        hasNextPage = true,
        isLoading,
        isFetchingNextPage,
    } = useBookSearch();

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

    const infiniteLoader = (
        <BeatLoader 
            color='#536067'
            loading={isFetchingNextPage}
            size={10}
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
                            dataLength={dataLength}
                            next={onScrollBottom}
                            hasMore={hasNextPage}
                            loader={infiniteLoader}
                            endMessage={<p>That's all folks!</p>}
                            scrollableTarget="scrollableDiv"
                            className='infinite-scroll'
                        >
                        {books !== undefined &&
                            books?.map((book) => {
                                const { etag, volumeInfo : {
                                    authors,
                                    imageLinks,
                                    title
                                }} = book;
                                return(
                                    <S.BookCardArea
                                        key={etag}
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
                                )
                        })}
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
                            dataLength={dataLength}
                            next={onScrollBottom}
                            hasMore={hasNextPage}
                            loader={infiniteLoader}
                            endMessage={<p>That's all folks!</p>}
                            scrollableTarget="scrollableDiv"
                            className='infinite-scroll'
                        >
                            {isSuccess &&
                                books?.map((book: BooksModel) => {
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
            {isLoading ? loader : width < 650 ? mobile : others}
        </PagePattern>
    )
}
