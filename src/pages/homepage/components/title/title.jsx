import React from 'react';
import Box from "@mui/material/Box";
import TitleItem from "./titleItem.jsx";


const Title = ({titleNews}) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: "center"
            }}
        >
            {titleNews && titleNews.map((el, i) => (
                <TitleItem key={i} titleNews={el}/>
            ))}
        </Box>
    );
};

export default Title;