import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MobileMenu from "./components/mobileMenu.jsx";
import DesktopMenu from "./components/desktopMenu.jsx";
import Logo from "./components/logo.jsx";

const pages = [
    {title: "Главная", link: '/homepage'},
    {title: "Услуги", link: '/services'},
    {title: "Портфолио", link: '/portfolio'},
    {title: "Цены", link: '/prices'},
    {title: "Контакты", link: '/contacts'}
];

function Header() {
    return (
        <AppBar color={'secondary'} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo/>
                    <MobileMenu pages={pages}/>
                    <DesktopMenu pages={pages}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
