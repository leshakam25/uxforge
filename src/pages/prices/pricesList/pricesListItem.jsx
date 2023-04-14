import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PricesListItem = ({developPrices}) => {
    return (
        <Card
            sx={{
                maxWidth: 400,
                minHeight: 600,
                border: '1px solid gray',
                p: 2,
                m: 1,
                gap:2,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                boxShadow:'none'
            }}
        >
            <Box>
                <Typography
                    textAlign={'center'}
                    variant={'h3'}

                >
                    {developPrices.title}
                </Typography>
                <Typography
                    textAlign={'center'}
                    variant={'body1'}
                >
                    {developPrices.subTitle}
                </Typography>
            </Box>
            <CardMedia
                component={'img'}
                src={developPrices.image}
                sx={{
                    maxWidth: 400,
                    height: 200,
                    borderRadius: 2
                }}
            />
            <Typography
                textAlign={'center'}
                variant={'body1'}
                lineHeight={"110%"}
                sx={{
                    textAlign: 'justify'
                }}
            >
                {developPrices.fullText}
            </Typography>
            <Typography
                color={
                    developPrices.discount === true ? "error" : "secondary"
                }
                variant={'h4'}
                lineHeight={"110%"}
                sx={{
                    textAlign: 'center',
                    border:'2px solid red',
                    borderRadius:8,
                    py:1,
                    lineHeight:'100%'
                }}
            >
                Стоимость: от &nbsp;
                {developPrices.discount === true ?
                    developPrices.discountPrice
                    : developPrices.price}
            </Typography>
            <Button
                size={'large'}
                variant={'contained'}
                fullWidth
                sx={{
                    boxShadow:'none'
                }}
            >
                Составить заказ
            </Button>
        </Card>
    );
};

export default PricesListItem;