import React from 'react';
import Box from "@mui/material/Box";
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
                <SubscribeFooterForm/>
                <ContactBlock/>
            </Container>
        </Box>
    );
};

export default Footer;