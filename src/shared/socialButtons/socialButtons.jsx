import React from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialButtons = ({color}) => {
    return (
        <Box>
            <IconButton
                sx={{
                    color: {color},
                }}
            >
                <InstagramIcon/>
            </IconButton>
            <IconButton
                sx={{
                    color: {color},
                }}
            >
                <TelegramIcon/>
            </IconButton>
            <IconButton
                sx={{
                    color: {color},
                }}
            >
                <TwitterIcon/>
            </IconButton>
        </Box>
    );
};

export default SocialButtons;