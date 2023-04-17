import React from 'react';
import Box from "@mui/material/Box";
import SeoPricesItem from "./seoPricesItem.jsx";

const SeoPrices = ({seoPrices}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow:'row wrap',
                justifyContent:'space-between'
            }}
        >
            {seoPrices && seoPrices.map((el, i) => (
                <SeoPricesItem
                    key={i}
                    seoPrices={el}
                />
            ))}
        </Box>
    );
};

export default SeoPrices;