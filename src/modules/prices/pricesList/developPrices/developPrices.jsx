import React from 'react';
import Box from "@mui/material/Box";
import DevelopPricesItem from "./developPricesItem.jsx";

const DevelopPrices = ({developPrices}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow:'row wrap',
                justifyContent:'center',
            }}
        >

            {developPrices && developPrices.map((el, i) => (
                <DevelopPricesItem
                    key={i}
                    developPrices={el}
                />
            ))}
        </Box>
    );
};

export default DevelopPrices;