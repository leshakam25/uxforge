import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActionArea} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';
import {modalStyle} from "../../../../data/styles.data.js";

const ServicesListItem = ({services, stages}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    textAlign: 'left',
                    my: 2,
                    boxShadow: 'none'
                }}
            >
                <CardActionArea
                    onClick={handleOpen}
                    sx={{
                        p: 1
                    }}
                >
                    <Typography
                        variant={'h2'}
                        sx={{
                            pb: 1,
                            textDecoration: 'underline'
                        }}
                    >
                        {services.title}
                    </Typography>
                    <Typography
                        variant={'body1'}
                    >
                        {services.text}
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
                    <Box sx={modalStyle}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                pb: 1
                            }}
                        >
                            {services.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="h2"
                            textAlign={'justify'}
                        >
                            {services.fullText}
                        </Typography>
                        {stages.length > 1 &&
                            <Typography
                                variant={"h4"}
                                sx={{
                                    pt: 4,
                                    pb: 1
                                }}
                            >
                                Этапы создания:
                            </Typography>
                        }
                        <Box
                            sx={{
                                display: 'flex',
                                flexFlow: {xs: 'column nowrap', md: 'row wrap'},
                                width: '100%'
                            }}>
                            {stages && stages.map((el, i) => (
                                <Typography
                                    key={i}
                                    component={'div'}
                                    variant={'body1'}
                                    textAlign={'left'}
                                >
                                    {el.text}
                                </Typography>
                            ))}
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
    )
        ;
};

export default ServicesListItem;