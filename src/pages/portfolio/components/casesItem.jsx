import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardMedia} from "@mui/material";

const CasesItem = ({cases}) => {
    return (
        <Card
            sx={{
                maxWidth: 400
            }}
        >
            <CardActionArea
                sx={{
                    p:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Typography
                    variant={"h3"}
                >
                    {cases.title}
                </Typography>
                <Typography
                    variant={'body1'}
                >
                    {cases.text}
                </Typography>
                <CardMedia
                    component={'img'}
                    src={cases.image}
                    sx={{
                        width: 300,
                        height: 300
                    }}
                />
            </CardActionArea>
        </Card>
    );
};

export default CasesItem;