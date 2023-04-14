import React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../header/components/logo.jsx";
import {pagesList} from "../../data/pagesList.data.js";
import DesktopMenu from "./components/desktopMenu.jsx";
import Container from "@mui/material/Container";
import SubscribeFooterForm from "./components/subscribeFooterForm.jsx";
import ContactBlock from "./components/contactBlock.jsx";

const Footer = () => {
    return (
        <Box
            sx={{
                background: '#232536',
                py: 2,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Logo/>
                    <DesktopMenu pagesList={pagesList}/>
                </Toolbar>
                <SubscribeFooterForm/>
                <ContactBlock/>
            </Container>
        </Box>
    );
};

export default Footer;