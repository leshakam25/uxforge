import React from 'react';
import Button from "@mui/material/Button";

const ContactButton = ({mx}) => {
    return (
        <Button
            variant={'contained'}
            size={'small'}
            sx={{
                height: 40,
                maxWidth:320,
                fontWeight: 800,
                boxShadow:'none',
                lineHeight:'100%',
                mx:mx,
                letterSpacing:3
            }}
        >
            Связаться
        </Button>
    );
};

export default ContactButton;