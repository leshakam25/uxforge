import React from 'react';
import Container from "@mui/material/Container";
import ServicesList from "./components/servicesList/servicesList.jsx";
import TitleBlock from "../../shared/titleBlock/titleBlock.jsx";

const Services = () => {
    return (
        <Container
            maxWidth={'xl'}
        >
            <TitleBlock title={'Услуги нашей студии'}/>
            <ServicesList/>
        </Container>
    );
};

export default Services;