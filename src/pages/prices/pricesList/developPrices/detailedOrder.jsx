import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CardMedia} from "@mui/material";

const DetailedOrder = ({developPrices}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow: "row wrap"
            }}
        >
            <CardMedia
                component={'img'}
                src={developPrices.image}
                sx={{
                    maxWidth:600,
                    m:'0 auto'
                }}
            />
            <Typography
                variant={'h3'}
                textAlign={'justify'}
            >
                {developPrices.fullText}
            </Typography>
        </Box>
    );
};

export default DetailedOrder;