import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const MakeOrderDevelopForm = ({developPrices}) => {
    return (
        <Grid
            container
            gap={2}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Typography
                variant={'h3'}
                gutterBottom
            >
                Форма заказа услуги создание {developPrices.title2}
            </Typography>
            <Grid
                item
                xs={12}
                md={5.85}
            >
                <TextField
                    color={'secondary'}
                    label={'Как вас зовут?'}
                    fullWidth
                />

            </Grid>
            <Grid
                item
                xs={12}
                md={5.85}
            >
                <TextField
                    color={'secondary'}
                    label={'Ваш номер телефона'}
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={12}
            >
                <TextField
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