import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/titleBlock/titleBlock.jsx";
import DevelopPrices from "./pricesList/developPrices/developPrices.jsx";
import {developPrices, seoPrices} from "../../data/prices.data.js";
import SeoPrices from "./pricesList/seoPrices/seoPrices.jsx";


const Prices = () => {
    return (
        <Container maxWidth={'xl'} sx={{py:4}}>
            <TitleBlock title={"Стоимость услуг разработки"}/>
            <DevelopPrices developPrices={developPrices}/>
            <TitleBlock title={"Стоимость услуг продвижения"}/>
            <SeoPrices seoPrices={seoPrices}/>
        </Container>
    );
};

export default Prices;