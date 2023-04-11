import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButton from "../../../../shared/components/contactButton/contactButton.jsx";

const TitleItem = ({titleNews}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '600px',
            justifyContent: 'center',
        }}>
            <Typography
                variant={'subtitle1'}
                sx={{
                    maxWidth: '880px',
                    py: 6
                }}
            >
                {titleNews.title}
            </Typography>
            <Typography
                variant={'body1'}
                sx={{
                    maxWidth: '740px',
                    mb: 4
                }}
            >
                {titleNews.text}
            </Typography>
            <ContactButton/>
        </Box>
    );
};

export default TitleItem;