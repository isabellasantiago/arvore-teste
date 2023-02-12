import React from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import * as S from './style'

interface PagePatternProps {
    children: React.ReactNode;
}



export const PagePattern: React.FC<PagePatternProps> = ({ children }) => {
    const { width } = useWindowSize();

    return (
        <S.MainContainer>
            <NavBar  width={width}/>
            <S.ChildrenContainer>
                {children}
            </S.ChildrenContainer>
            <Footer />
        </S.MainContainer>
    )
}