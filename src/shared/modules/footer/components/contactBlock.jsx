import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
                textAlign={'center'}
                sx={{
                    maxWidth: 400
                }}
            >
                Телефон для связи +7 (958) 178-01-97 <br/>
                Санкт-Петербург
            </Typography>

            <Typography
                component={'div'}
                sx={{
                    maxWidth: 400,
                }}
            >
                uxForge, 2023
            </Typography>
            {/*<SocialButtons color={'white'}/>*/}
        </Box>
    );
};

export default ContactBlock;