import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NavBar } from '../NavBar';
import * as S from './style'

interface PagePatternProps {
    children: React.ReactNode;
    isHighlight: boolean;
}



export const PagePattern: React.FC<PagePatternProps> = ({ children }) => {
    const { width } = useWindowSize();

    return (
        <S.MainContainer>
            <NavBar  width={width}/>
            <S.ChildrenContainer isHighlight>{children}</S.ChildrenContainer>
            <S.Footer widthSize={width}>
                <S.Text widthSize={width}>
                    Copyright &#169; 2021 Árvore. Todos os direitos reservados.
                </S.Text>
               {width > 743 && (
                <S.FooterRightContainer>
                 <S.Button>Política de privacidade</S.Button>
                 <S.Button width="76px">Ajuda</S.Button>
                </S.FooterRightContainer>
               )}
            </S.Footer>
        </S.MainContainer>
    )
}