import React from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import * as S from './style';

interface Props {
    showRightContainer?: boolean;
}

export const Footer: React.FC<Props> = ({
    showRightContainer = true
}) => {
    const { width }  = useWindowSize();

    return(
        <S.Footer widthSize={width}>
                <S.Text widthSize={width}>
                    Copyright &#169; 2021 Árvore. Todos os direitos reservados.
                </S.Text>
               {width > 743 && !showRightContainer && (
                <S.FooterRightContainer>
                 <S.Button>Política de privacidade</S.Button>
                 <S.Button width="76px">Ajuda</S.Button>
                </S.FooterRightContainer>
               )}
        </S.Footer>
    )
}