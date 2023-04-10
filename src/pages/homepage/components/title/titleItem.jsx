import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButton from "../../../../shared/contactButton/contactButton.jsx";

const TitleItem = ({news}) => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            minHeight:'600px',
            justifyContent:'center',

        }}>
            <Typography variant={'subtitle1'} sx={{maxWidth: '880px'}}>
                {news.title}
            </Typography>
            <Typography variant={'body1'} sx={{maxWidth: '740px'}}>
                {news.text}
            </Typography>
            <Typography variant={'body1'} sx={{
                opacity:0.6,
                mb:4
            }}>
                {news.createdAt}
            </Typography>
            <ContactButton/>
        </Box>
    );
};

export default TitleItem;