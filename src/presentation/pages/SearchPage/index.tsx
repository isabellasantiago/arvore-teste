import React, { useMemo, useState } from 'react';
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
    const { books, isLoading, hasMore } = useBookSearch({
        query: searchQuery ?? 'react',
        pageNumber: searchIndex
    });

    console.log('searchQuery', searchQuery)
    console.log('use - books',books)
    

    if(isLoading) return (<h2>Loading...</h2>)

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
                    {books?.length > 0  && books?.flatMap((book, index) => {
                    console.log('index', index,)
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
            </S.Container>
        </PagePattern>
    )
}