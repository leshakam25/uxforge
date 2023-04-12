import React from 'react';
import Container from "@mui/material/Container";
import ServicesList from "./components/servicesList/servicesList.jsx";
import Typography from "@mui/material/Typography";

const Services = () => {
    return (
        <Container
            maxWidth={'xl'}
            sx={{mt: 9}}
        >

                <Typography
                    variant={"h1"}
                    component={'div'}
                    sx={{
                        py:24
                    }}
                >
                    Услуги нашей студии
                </Typography>

            <ServicesList/>
        </Container>
    );
};

export default Services;