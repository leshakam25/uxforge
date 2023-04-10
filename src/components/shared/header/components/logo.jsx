import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Logo = () => {
    return (

        <Button sx={{
            color: 'inherit',
        }}>
            <Typography
                variant="subtitle2"
                noWrap
                component="a"
                href="/"
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