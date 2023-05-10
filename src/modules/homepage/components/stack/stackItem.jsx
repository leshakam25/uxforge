import React from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const StackItem = ({stack}) => {
    return (
        <Card
            sx={{
                maxWidth: 420,
                textAlign: 'center',
                my:4,
                boxShadow:4,
                borderRadius:1
            }}
        >
            <CardContent>
                <CardMedia
                    component={'img'}
                    src={stack.image}
                    sx={{
                        width: 'auto',
                        height:200,
                        m: '0 auto'
                    }}
                />
                <Typography variant={'h2'} sx={{mt: 4}}>
                    {stack.title}
                </Typography>
                <Typography variant={'body1'}>
                    {stack.text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StackItem;