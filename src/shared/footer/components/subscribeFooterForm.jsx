import React from 'react';
import {ButtonGroup, Card, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SubscribeFooterForm = () => {
    return (
        <Card
            sx={{
                py: 14,
                px: 10,
                background: '#6D6E76',
                backdropFilter: 'blur(115px)',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white'
            }}
        >
            <Typography
                variant={'h2'}
                sx={{maxWidth: 720}}
            >
                Подпишитесь для получения наших последних новостей
            </Typography>
            <Box>
                <ButtonGroup>
                    <TextField
                        variant={'filled'}
                        label={'Введите email'}
                    />
                    <Button
                        variant={'contained'}
                        size={'large'}
                        sx={{
                            height: 55,
                            boxShadow: 'none',
                            fontWeight: 800
                        }}
                    >
                        Подписаться
                    </Button>
                </ButtonGroup>
            </Box>
        </Card>
    );
};

export default SubscribeFooterForm;