import React from 'react';
import Button from "@mui/material/Button";

const ContactButton = () => {
    return (
        <Button
            variant={'contained'}

            sx={{
                height: 40,
                maxWidth:320,
                fontWeight: 800,
                boxShadow:'none'
            }}
        >
            Связаться с нами
        </Button>
    );
};

export default ContactButton;