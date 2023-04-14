import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

const CasesItem = ({cases}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Card
            sx={{
                width: '100%',
                boxShadow: 'none',
                my: 2
            }}
        >
            <CardActionArea
                onClick={handleOpen}
                sx={{
                    p: 4,
                    display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'left',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <CardMedia
                    component={'img'}
                    src={cases.image}
                    sx={{
                        maxWidth: 200,
                        maxHeight: 200
                    }}
                />
                <Box
                    sx={{
                        m: '0 auto',
                        overflow: 'auto',
                        maxHeight: 200,
                        maxWidth: 600
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
                <Typography
                    color={'#aeaeae'}
                    fontWeight={800}
                    letterSpacing={4}
                    sx={{
                        position: 'absolute',
                        top: "center",
                        right: 16
                    }}
                >
                    Подробно
                </Typography>
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
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        maxHeight: '88vh',
                        width: '90vh',
                        overflowY: 'auto',
                        borderRadius:'4px'
                    }}>
                        <CardMedia
                            component={'img'}
                            src={cases.image}
                            sx={{
                                maxWidth: 600,
                                maxHeight: 600
                            }}
                        />
                        <Typography>
                            {cases.fullText}
                        </Typography>
                        <IconButton
                            onClick={handleClose}
                            color={'error'}
                            size={'small'}
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                opacity:0.9
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