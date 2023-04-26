import React from 'react';
import Button from "@mui/material/Button";
import {Backdrop, Fade, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import FeedbackForm from "./feedbackForm.jsx";
import {modalStyle} from "../../data/styles.data.js";

const FeedbackButton = ({mx}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={handleOpen}
                variant={'contained'}
                size={'small'}
                sx={{
                    height: 40,
                    maxWidth: 320,
                    fontWeight: 800,
                    boxShadow: 'none',
                    lineHeight: '100%',
                    mx: mx,
                    letterSpacing: 3
                }}
            >
                Связаться
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={modalStyle}
                    >
                        <FeedbackForm handleClose={handleClose}/>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default FeedbackButton;