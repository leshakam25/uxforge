import React from 'react';
import {Card, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SubscribeFooterForm = () => {
    return (
        <Card
            sx={{
                py: 14,
                px: 10,
                background: '#ffffff',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}
        >
            <Typography variant={'h2'} sx={{maxWidth: 720}}>
                Подпишитесь для получения наших последних новостей
            </Typography>
            <Box>
                <TextField label={'Введите email'}/>
                <Button
                    variant={'contained'}
                    size={'large'}
                    sx={{height: 55,mx:1}}
                >
                    Подписаться
                </Button>
            </Box>
        </Card>
    );
};

export default SubscribeFooterForm;