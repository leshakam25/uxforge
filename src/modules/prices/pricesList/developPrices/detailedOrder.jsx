import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CardMedia} from "@mui/material";

const DetailedOrder = ({developPrices}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow: "row wrap",
                maxHeight:'90vh',
                overflow:'auto',
                maxWidth:800,
            }}
        >
            <CardMedia
                component={'img'}
                src={developPrices.image}
                sx={{
                    maxWidth:400,
                    m:'0 auto'
                }}
            />
            <Typography
                variant={'h6'}
                textAlign={'justify'}
                sx={{

                }}
            >
                {developPrices.fullText}
            </Typography>
        </Box>
    );
};

export default DetailedOrder;