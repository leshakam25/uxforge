import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/components/titleBlock/titleBlock.jsx";
import Cases from "./components/cases/cases.jsx";
import {cases} from "./portfolio.data.js";

const Portfolio = () => {
    return (
        <Container maxWidth={'xl'} sx={{py:4}}>
            <TitleBlock title={"Наши кейсы"}/>
            <Cases cases={cases}/>
        </Container>
    );
};

export default Portfolio;