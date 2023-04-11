import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MobileMenu from "./components/mobileMenu.jsx";
import DesktopMenu from "./components/desktopMenu.jsx";
import Logo from "./components/logo.jsx";
import {pagesList} from "../../data/pagesList.data.js";

function Header() {
    return (
        <AppBar color={'secondary'} position="fixed" sx={{boxShadow:'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo/>
                    <MobileMenu pagesList={pagesList}/>
                    <DesktopMenu pagesList={pagesList}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
