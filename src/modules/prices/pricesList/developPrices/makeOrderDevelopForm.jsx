import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const MakeOrderDevelopForm = ({developPrices}) => {
    return (
        <Grid
            container
            display={'flex'}
            justifyContent={'center'}
        >
            <Typography
                variant={'h3'}
                gutterBottom
                textAlign={'center'}
            >
                Форма заказа услуги  <br/> создание {developPrices.title2}
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

export default MakeOrderDevelopForm;