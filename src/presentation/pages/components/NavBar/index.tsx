import React from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/Logo.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/notification-icon.svg';
import { SearchBar, ProfilePic } from '../';
import * as S from './style'


interface NavProps {
    width: number
}

export const NavBar: React.FC<NavProps> = ({ width }) => {
    const mobileNav = (
        <S.MobileContainer>
            <S.NavBar widthSize={width}>
                <NavLink to="/">
                    <Logo
                        width='111px'
                        height='24px'
                    />
                </NavLink>
                <S.NotificationContainer widthSize={width}>
                    <S.NotficationIconArea>
                        <NotificationIcon />
                        <S.Bubble />
                    </S.NotficationIconArea>
                    <ProfilePic
                        img=''
                        name="alessandra"
                        widthSize={width}
                    />
                </S.NotificationContainer>
            </S.NavBar>
            <SearchBar widthSize={width}/>
        </S.MobileContainer>
    )

    const nav = (
        <S.NavBar widthSize={width}>
        <NavLink to="/">
            <Logo
                width={ width > 1600 ? '126px' : '111px'}
                height={ width > 1600 ? '30px' : '24px'}
            />
        </NavLink>
        <SearchBar widthSize={width}/>
        <S.NotificationContainer widthSize={width}>
            {width < 1600 && (
                <S.NotficationIconArea>
                    <NotificationIcon />
                    <S.Bubble />
                </S.NotficationIconArea>
            )}
            <ProfilePic
                img=''
                name="alessandra"
                widthSize={width}
            />
        </S.NotificationContainer>
        </S.NavBar>
    )


    return (
        <>
        {width > 740 ? nav : mobileNav}
        </>
    )
}