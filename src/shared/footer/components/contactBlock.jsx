import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactBlock = () => {
    return (
        <Box
            sx={{
                color: 'white',
                opacity:0.5,
                display:'flex',
                flexFlow:'row wrap',
                justifyContent:'space-between',
                alignItems:'center'
            }}
        >
            <Typography
                component={'div'}
                sx={{
                    maxWidth:400
                }}
            >
                Санкт-Петербург, Невский проспект д. 1 <br/>
                Телефон для связи 8 (812) 420 69 13
            </Typography>
            <Box>
                <IconButton
                    sx={{
                        color: 'white'
                    }}
                >
                    <InstagramIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        color: 'white'
                    }}
                >
                    <TelegramIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        color: 'white'
                    }}
                >
                    <TwitterIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default ContactBlock;