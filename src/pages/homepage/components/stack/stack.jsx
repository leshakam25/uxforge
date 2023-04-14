import React from 'react';
import StackItem from "./stackItem.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Stack = ({stack}) => {
    return (
        <Box>
            <Typography variant={'h1'}>
                Технологии используемые при создании web приложений и сайтов
            </Typography>
            <Box sx={{
                display:'flex',
                flexFlow:'row wrap',
                justifyContent:'space-between',

            }}>
                {stack && stack.map((el, i) => (
                    <StackItem key={i} stack={el}/>
                ))}
            </Box>
        </Box>
    );
};

export default Stack;