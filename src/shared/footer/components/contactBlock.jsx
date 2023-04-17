import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialButtons from "../../socialButtons/socialButtons.jsx";

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
          <SocialButtons color={'white'}/>
        </Box>
    );
};

export default ContactBlock;