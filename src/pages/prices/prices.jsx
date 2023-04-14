import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/titleBlock/titleBlock.jsx";
import PricesList from "./pricesList/pricesList.jsx";
import {developPrices} from "../../data/prices.data.js";


const Prices = () => {
    return (
        <Container maxWidth={'xl'}>
            <TitleBlock title={"Стоимость услуг разработки и продвижения"}/>
            <PricesList developPrices={developPrices}/>
        </Container>
    );
};

export default Prices;