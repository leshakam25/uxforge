import React from 'react';
import PricesListItem from "./pricesListItem.jsx";
import Box from "@mui/material/Box";

const PricesList = ({developPrices}) => {
    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >

            {developPrices && developPrices.map((el, i) => (
                <PricesListItem
                    key={i}
                    developPrices={el}
                />
            ))}
        </Box>
    );
};

export default PricesList;