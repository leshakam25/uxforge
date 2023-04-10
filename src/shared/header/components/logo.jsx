import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={()=>navigate('/')}
            sx={{
            color: 'inherit',
        }}>
            <Typography
                variant="subtitle2"
                sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    textTransform: 'none'
                }}
            >
                UXForge
            </Typography>
        </Button>
    );
};

export default Logo;