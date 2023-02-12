import React, { useEffect, useRef, useState } from 'react';
import { useFilter } from '../../../helpers/context';
import { PagePattern } from '../components';
import { BookCard } from '../components/BookCard';
import { FilterButton } from '../components/FilterButton';
import { useBookSearch } from '../../hooks/useBookSearch';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as S from './style';



export const SearchPage: React.FC = () => {
    const [searchIndex, setSearchIndex] = useState(0);
    const { width } = useWindowSize();
    const { searchQuery, setStartIndex } = useFilter();
    const { books, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } = useBookSearch({
        query: searchQuery ?? 'react',
    });

    const loadMoreRef = useRef(null);

    const booksItems = books?.flatMap((page) => page?.items);
    console.log('searchQuery', searchQuery)

    useEffect(() => {
        let fetching = false;

        const onScroll = async (e: any) => {
            const { scrollHeight, scrollTop, clientHeight} = e.currentTarget;

            if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.5){
                fetching = true;
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        }

        document.addEventListener('scroll', onScroll);
        return () => { document.removeEventListener('scroll', onScroll)}
    },[])


    return(
        <PagePattern>
            <S.Container>
                <S.SearchString>
                    {`Resultados para "${searchQuery}":`}
                </S.SearchString>
                <S.ButtonArea>
                <FilterButton 
                    widthSize={width}
                    buttonType='filter'
                />
                </S.ButtonArea>
                <S.BooksContaienr>
                    {isSuccess && booksItems?.map((book, index) => {
                    const { volumeInfo : {
                        authors,
                        imageLinks,
                        title
                    }, id} = book;

                return(
                    <S.BookCardArea key={id}>
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
                </S.BooksContaienr>
                <S.SupportedDiv ref={loadMoreRef}>
                    {isFetchingNextPage ? "Loading more..." : ""}
                </S.SupportedDiv>
            </S.Container>
        </PagePattern>
    )
}