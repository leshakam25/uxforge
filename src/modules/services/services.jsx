import React from 'react';
import Container from "@mui/material/Container";
import ServicesList from "./components/servicesList/servicesList.jsx";
import TitleBlock from "../../shared/components/titleBlock/titleBlock.jsx";

const Services = () => {
    return (
        <Container maxWidth={'xl'} sx={{py:4}}>
            <TitleBlock title={'Услуги нашей студии'}/>
            <ServicesList/>
        </Container>
    );
};

export default Services;