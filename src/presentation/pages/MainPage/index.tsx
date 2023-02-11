import React, { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchBooks } from '../../../helpers/fetchBooks';
import { PagePattern } from '../components';
import { BookShelves } from '../components/BookShelves';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MainContainer } from './style';


export const MainPage: React.FC = () => {
    const { width } = useWindowSize();
    const maxResultQuery = `startIndex=0&maxResults=10`;
    const { data } = useQuery('booksAction', async () => await fetchBooks(`q=+subject:action&${maxResultQuery}`));
    const { data: adventure } = useQuery('booksAdventure', async () => await fetchBooks(`q=+subject:adventure&${maxResultQuery}`));
    const { data: highlights } = useQuery('booksHighlights', async () => await fetchBooks(`q=+subject:draft+contrast&${maxResultQuery}`));
    const { data: children } = useQuery('booksChildren', async () => await fetchBooks(`q=+subject:children&${maxResultQuery}`));

    const booksAction = data?.items
    const booksAdventure = adventure?.items;
    const booksHighlights = highlights?.items;
    const booksChildren = children?.items;
    

    return (
        <>        
        <PagePattern>
            <MainContainer widthSize={width}>
                <BookShelves
                    widthSize={width}
                    books={booksAction}
                    categoryTitle="Ação"
                />
                <BookShelves
                    widthSize={width}
                    books={booksAdventure}
                    categoryTitle="Aventura"
                />
                <BookShelves
                    widthSize={width}
                    books={booksHighlights}
                    categoryTitle="Destaques"
                    isHighlight
                />
                <BookShelves
                    widthSize={width}
                    books={booksChildren}
                    categoryTitle="Infantil"
                />
            </MainContainer>
        </PagePattern>
        </>
    )
}