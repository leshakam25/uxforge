import React from 'react';
import Typography from "@mui/material/Typography";
import {Card} from "@mui/material";

const ServicesListItem = ({services}) => {
    return (
        <Card
            sx={{
                maxWidth: 420,
                textAlign: 'center',
                my: 4,
                boxShadow: 'none'
            }}
        >
            <Typography
                variant={'h2'}
            >
                {services.title}
            </Typography>
            <Typography
                variant={'body1'}
            >
                {services.text}
            </Typography>
        </Card>
    );
};

export default ServicesListItem;