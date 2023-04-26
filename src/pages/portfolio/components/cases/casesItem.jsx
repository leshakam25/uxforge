import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import {modalStyle} from "../../../../data/styles.data.js";

const CasesItem = ({cases}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    maxWidth: {xs: '100%', md: '50%'},
                    boxShadow: 'none',
                    my: 2
                }}
            >
                <CardActionArea
                    onClick={handleOpen}
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center',
                        position: 'relative'
                    }}
                >
                    <CardMedia
                        component={'img'}
                        src={cases.image}
                        sx={{
                            maxWidth: 200,
                            maxHeight: 200,
                            px: 2
                        }}
                    />
                    <Box
                        sx={{
                            m: '0 auto',
                            overflow: 'auto',
                            maxHeight: 200,
                            maxWidth: 400
                        }}
                    >
                        <Typography
                            variant={"h3"}
                        >
                            {cases.title}
                        </Typography>
                        <Typography
                            variant={'body1'}
                        >
                            {cases.text}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
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
                    <Box sx={modalStyle}>
                        <CardMedia
                            component={'img'}
                            src={cases.image}
                            sx={{
                                maxWidth: 400,
                                maxHeight: 400,
                                m: '0 auto'
                            }}
                        />
                        <Box
                            sx={{
                                maxWidth: 660
                            }}
                        >
                            <Typography
                                variant={'body1'}
                                textAlign={'justify'}
                            >
                                {cases.fullText}
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={handleClose}
                            color={'error'}
                            size={'small'}
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                opacity: 0.9
                            }}
                        >
                            <CancelIcon/>
                        </IconButton>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default CasesItem;