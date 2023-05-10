import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AdvantagesItem = ({advantages}) => {
    return (
        <Box
            sx={{
                maxWidth: 420,
                my:4,
                boxShadow:4,
                p:2,
                borderRadius:1
            }}
        >
            <Typography variant={"h2"}>
                {advantages.title}
            </Typography>
            <Typography variant={'body1'}>
                {advantages.text}
            </Typography>
        </Box>
    );
};

export default AdvantagesItem;