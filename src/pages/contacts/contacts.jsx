import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/TitleBlock.jsx";

const Contacts = () => {
    return (
        <Container
            maxWidth={'xl'}
            sx={{mt: 9}}
        >
            <TitleBlock title={"Контакты"}/>
        </Container>
    );
};

export default Contacts;