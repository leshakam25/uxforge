import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FeedbackButton from "../../../../shared/feedbackButton/feedbackButton.jsx";

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
            <FeedbackButton/>
        </Box>
    );
};

export default TitleItem;