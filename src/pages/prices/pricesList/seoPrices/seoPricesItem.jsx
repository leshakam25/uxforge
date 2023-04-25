import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardMedia, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SeoPricesItem = ({seoPrices}) => {
    const discountIcon = 'https://i.postimg.cc/25Mw2tWb/free-icon-discount-label-2981281.png'
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    maxWidth: 300,
                    minHeight: 240,
                    border: seoPrices.discount === true ? "8px solid #ff4252" : "8px solid gray",
                    px: 2,
                    py: 4,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 12,
                    position: "relative"
                }}
            >
                <Box>
                    <Typography
                        textAlign={'left'}
                        variant={'h4'}
                        sx={{}}
                    >
                        {seoPrices.title}
                    </Typography>
                    <Typography
                        textAlign={'left'}
                        variant={'h6'}
                        sx={{}}
                    >
                        {seoPrices.subtitle}
                    </Typography>
                    <Box sx={{
                        my: 2
                    }}>
                        {seoPrices.list && seoPrices.list.map((el, i) => (
                            <Typography
                                component={'div'}
                                key={i}
                                textAlign={'left'}
                                variant={'body1'}
                                lineHeight={"100%"}
                                fontWeight={700}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                <ArrowRightAltIcon sx={{
                                    opacity: 0.6
                                }}/>{el}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            color: seoPrices.discount === true ? "red" : "black",
                            textAlign: 'center',
                            borderRadius: 1,
                            py: 1,
                            border: seoPrices.discount === true ? "4px solid #ff4252" : "4px solid gray",
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: 1
                        }}
                    >
                        <Typography
                            variant={'h6'}
                            lineHeight={"100%"}
                        >
                            Стоимость от &nbsp;

                        </Typography>
                        <Typography
                            variant={'h6'}
                            lineHeight={"100%"}
                        >
                            {seoPrices.discount === false && seoPrices.price}
                        </Typography>
                        <Typography
                            variant={'h6'}
                            lineHeight={"100%"}
                        >
                            {seoPrices.discount === true && seoPrices.discountPrice}
                        </Typography>
                        &nbsp;
                        <Typography
                            variant={'body2'}
                            lineHeight={"100%"}
                            sx={{
                                textDecoration: 'line-through'
                            }}
                        >
                            {seoPrices.discount === true && seoPrices.price}
                        </Typography>
                    </Box>
                    <Button
                        onClick={handleOpen}
                        size={'large'}
                        variant={'contained'}
                        fullWidth
                        sx={{
                            boxShadow: 'none',
                            fontWeight: 800
                        }}
                    >
                        Составить заказ
                    </Button>
                </Box>
                {seoPrices.discount === true &&
                    <CardMedia
                        component={'img'}
                        src={discountIcon}
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            height: '60px',
                            width: 'auto'
                        }}
                    />
                }
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: "auto",
                        height: 'auto',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    makeOrderSeoForm
                </Box>
            </Modal>
        </>
    );
};

export default SeoPricesItem;