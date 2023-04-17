import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DevelopPricesItem = ({developPrices}) => {
    const discountIcon = 'https://i.postimg.cc/25Mw2tWb/free-icon-discount-label-2981281.png'

    return (
        <Card
            sx={{
                maxWidth: 380,
                minHeight: 400,
                border: developPrices.discount === true ? "8px solid #ff4252" : "8px solid gray",
                px: 2,
                py:4,
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
                    textAlign={'center'}
                    variant={'h4'}
                    sx={{

                    }}
                >
                    {developPrices.title}
                </Typography>

                <Typography
                    textAlign={'center'}
                    variant={'h6'}
                    lineHeight={'100%'}
                >
                    {developPrices.subTitle}
                </Typography>
                <CardMedia
                    component={'img'}
                    src={developPrices.image}
                    sx={{
                        m:'0 auto',
                        width: "auto",
                        height: '280px',
                        borderRadius: 2,
                        my:1
                    }}
                />
                <Typography
                    textAlign={'center'}
                    variant={'body1'}
                    lineHeight={"110%"}
                    sx={{
                        textAlign: 'justify',
                        my:1
                    }}
                >
                    {developPrices.text}
                </Typography>
            </Box>
            <Box>
                <Box
                    sx={{
                        color: developPrices.discount === true ? "red" : "black",
                        textAlign: 'center',
                        borderRadius: 1,
                        py: 1,
                        border: developPrices.discount === true ? "4px solid #ff4252" : "4px solid gray",
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 1
                    }}
                >
                    <Typography
                        variant={'h5'}
                        lineHeight={"100%"}
                    >
                        Стоимость от &nbsp;

                    </Typography>
                    <Typography
                        variant={'h5'}
                        lineHeight={"100%"}
                    >
                        {developPrices.discount === false && developPrices.price}
                    </Typography>
                    <Typography
                        variant={'h5'}
                        lineHeight={"100%"}
                    >
                        {developPrices.discount === true && developPrices.discountPrice}
                    </Typography>
                    &nbsp;
                    <Typography
                        variant={'h6'}
                        lineHeight={"100%"}
                        sx={{
                            textDecoration: 'line-through'
                        }}
                    >
                        {developPrices.discount === true && developPrices.price}
                    </Typography>
                </Box>
                <Button
                    size={'large'}
                    color={'secondary'}
                    variant={'outlined'}
                    fullWidth
                    sx={{
                        boxShadow: 'none',
                        fontWeight: 800,
                        mb:1
                    }}
                >
                    Подробнее
                </Button>
                <Button
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
            {developPrices.discount === true &&
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
    );
};

export default DevelopPricesItem;