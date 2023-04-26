import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialButtons from "../../socialButtons/socialButtons.jsx";

const ContactBlock = () => {
    return (
        <Box
            sx={{
                color: 'white',
                opacity: 0.5,
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                component={'div'}
                sx={{
                    maxWidth: 400
                }}
            >
                Санкт-Петербург, Невский проспект д. 1 <br/>
                Телефон для связи 8 (812) 420 69 13
            </Typography>
            <SocialButtons color={'white'}/>
            <Typography
                component={'div'}
                sx={{
                    maxWidth: 400,
                    border:'1px solid white',
                    px:1,
                    borderRadius:2
                }}
            >
                uxForge 2023
            </Typography>
        </Box>
    );
};

export default ContactBlock;