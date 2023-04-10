import React from 'react';
import Box from "@mui/material/Box";
import TitleItem from "./titleItem.jsx";
import {news} from '../../../../data/homePage.data.js';

const Title = () => {
    return (
        <Box>
            {news && news.map((el, i)=>(
                <TitleItem key={i} news={el}/>
            ))}
        </Box>
    );
};

export default Title;