import React, { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchBooks } from '../../../fetchBooks';
import { PagePattern } from '../components';
import { BookShelves } from '../components/BookShelves';
import { useWindowSize } from '../hooks/useWindowSize';
import { MainContainer } from './style';


export const MainPage: React.FC = () => {
    const { width } = useWindowSize();
    const { data } = useQuery('books', fetchBooks);
    

    return (
        <>        
        <PagePattern>
            <MainContainer>
                <BookShelves
                    widthSize={width}
                    books={data?.items}
                />
            </MainContainer>
        </PagePattern>
        </>
    )
}