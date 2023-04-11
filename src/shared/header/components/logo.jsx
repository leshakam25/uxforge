import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <Button
            size={'large'}
            onClick={() => navigate('/')}
            sx={{
                color:"inherit"
            }}
        >
            <Typography
                sx={{
                    color: 'white',
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: 32,
                    letterSpacing: -3
                }}
            >
                UXForge
            </Typography>
        </Button>
    );
};

export default Logo;