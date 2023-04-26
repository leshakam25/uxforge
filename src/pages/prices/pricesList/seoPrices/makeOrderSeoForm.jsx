import React from 'react';
import {Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MakeOrderSeoForm = ({seoPrices}) => {
    return (
        <Grid
            container
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Typography
                variant={'h3'}
                gutterBottom
            >
                Форма заказа услуги {seoPrices.title2}
            </Typography>
            <Grid
                item
                xs={12}
                md={6}
            >
                <TextField
                    variant={'standard'}
                    color={'secondary'}
                    label={'Как вас зовут?'}
                    fullWidth
                />

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <TextField
                    variant={'standard'}
                    color={'secondary'}
                    label={'Ваш номер телефона'}
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    py:1
                }}
            >
                <TextField
                    variant={'standard'}
                    color={'secondary'}
                    label={'Оставьте сообщение'}
                    fullWidth
                    multiline
                    rows={4}
                />

            </Grid>
            <Button
                fullWidth
                variant={'contained'}
                sx={{
                    boxShadow:'none'
                }}
            >
                <Typography>
                    Отправить
                </Typography>
            </Button>
        </Grid>
    );
};

export default MakeOrderSeoForm;