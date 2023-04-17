import React from 'react';
import Container from "@mui/material/Container";
import Title from "./components/title/title.jsx";
import Advantages from "./components/advantages/advantages.jsx";
import {advantages, titleNews, stack} from "../../data/homePage.data.js";
import Stack from "./components/stack/stack.jsx";

const Homepage = () => {
    return (
        <Container maxWidth={'xl'} sx={{py:4}}>
            <Title titleNews={titleNews}/>
            <Advantages advantages={advantages}/>
            <Stack stack={stack}/>
        </Container>
    );
};

export default Homepage;