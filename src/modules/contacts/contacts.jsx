import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/components/titleBlock/titleBlock.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {contactsData} from "./contacts.data.js";
import {Card} from "@mui/material";

const Contacts = () => {
    return (
        <Container maxWidth={'xl'} sx={{py: 4}}>
            <TitleBlock title={"Контакты"}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                my: 2
            }}>
                <Card sx={{
                    p: 2,
                    bgcolor: 'lightgray'
                }}>
                    <Typography fontWeight={"800"}>
                        {contactsData.email}
                    </Typography>
                    <Typography fontWeight={"800"}>
                        {contactsData.adress}
                    </Typography>
                    <Typography fontWeight={"800"}>
                        {contactsData.phone}
                    </Typography>
                    {/*<SocialButtons/>*/}
                </Card>
            </Box>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.312757%2C59.936949&mode=whatshere&whatshere%5Bpoint%5D=30.312129%2C59.936410&whatshere%5Bzoom%5D=17&z=17.57"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
            >
            </iframe>
        </Container>
    );
};

export default Contacts;