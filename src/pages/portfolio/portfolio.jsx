import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/titleBlock/titleBlock.jsx";
import Cases from "./components/cases/cases.jsx";
import {cases} from "../../data/portfolio.data.js";

const Portfolio = () => {
    return (
        <Container maxWidth={'xl'}>
            <TitleBlock title={"Наши кейсы"}/>
            <Cases cases={cases}/>
        </Container>
    );
};

export default Portfolio;