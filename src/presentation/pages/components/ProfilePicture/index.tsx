import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as S from './style';

const imgBase = 'https://img.freepik.com/fotos-premium/mulher-linda-vestida-para-a-noite-de-carnaval_63135-3256.jpg?w=740'

interface ProfilePicProps {
    img: string;
    name: string;
    widthSize: number;
}

export const ProfilePic: React.FC<ProfilePicProps> = ({
    img,
    name,
    widthSize,
}) => {

    return(
        <S.Container widthSize={widthSize}>
            <S.ProfilePic src={img ? img : imgBase} alt="imagem de perfil"/>
            {widthSize < 1600 ? null : (
            <S.NameContainer>
                <S.Name>{name}</S.Name>
                <KeyboardArrowDownIcon sx={{ color: '#406A76'}}/>
            </S.NameContainer>
            )}
        </S.Container>
    )
}