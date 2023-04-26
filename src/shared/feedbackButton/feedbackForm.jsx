import React from "react";
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function FeedbackForm() {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
            sx={{
                gap:3,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                position:'relative'
            }}
            >
                <Typography
                    component={'div'}
                    variant={'h6'}
                    textAlign={'left'}
                >
                    Оставьте ниже ваши данные и наши специалисты обязательно свяжутся с вами
                </Typography>
                <Box>
                <TextField
                    {...register('name')}
                    variant={'filled'}
                    fullWidth
                    label={'Как вас зовут?'}
                />
                <TextField
                    {...register('phone')}
                    variant={'filled'}
                    fullWidth
                    label={'Номер телефона'}
                />
                <TextField
                    {...register('email')}
                    variant={'filled'}
                    fullWidth
                    label={'Email'}
                />
                    <TextField
                        {...register('message')}
                        variant={'filled'}
                        multiline
                        rows={4}
                        fullWidth
                        label={'Оставьте ваше сообщение'}
                    />
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    sx={{
                        fontWeight:800,
                        boxShadow:'none'
                    }}
                >
                    Отправить
                </Button>
            </Box>
        </form>
    );
}

export default FeedbackForm;
