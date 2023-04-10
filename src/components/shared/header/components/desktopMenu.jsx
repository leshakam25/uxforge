import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const DesktopMenu = ({pages}) => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: {xs: 'none', md: 'flex'},
            alignItems: "center"
        }}>
            {pages.map((page, id) => (
                <Button
                    key={id}
                    onClick={navigate('/homepage')}
                    sx={{my: 2, color: 'white', display: 'block', textTransform: 'none'}}
                >
                    <Typography   variant={'body1'}>{page.title}</Typography>
                </Button>
            ))}
            <Button
                variant={'contained'}
                size={'small'}
                sx={{
                    height: 40,
                    ml: 1,
                    fontWeight: 800
                }}
            >
                Связаться с нами
            </Button>
        </Box>
    );
};

export default DesktopMenu;