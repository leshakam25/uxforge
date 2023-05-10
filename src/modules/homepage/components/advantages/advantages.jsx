import React from 'react';
import AdvantagesItem from "./advantagesItem.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Advantages = ({advantages}) => {
    return (
        <Box >
            <Typography
                variant={'h1'}
                sx={{
                    opacity: 0.8,
                    mb:2
                }}
            >
                Почему же мы?
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>

                {advantages && advantages.map((el, i) => (
                    <AdvantagesItem key={i} advantages={el}/>
                ))}
            </Box>
        </Box>
    );
};

export default Advantages;