import React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../header/components/logo.jsx";
import {pagesList} from "../../data/pagesList.data.js";
import DesktopMenu from "./components/desktopMenu.jsx";
import Container from "@mui/material/Container";
import SubscribeFooterForm from "./components/subscribeFooterForm.jsx";

const Footer = () => {
    return (
        <Box
            sx={{
                minHeight: 560,
                background:'#232536'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo/>
                    <DesktopMenu pagesList={pagesList}/>
                </Toolbar>
                <SubscribeFooterForm/>
            </Container>
        </Box>
    );
};

export default Footer;