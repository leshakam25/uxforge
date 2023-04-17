import React from 'react';
import Container from "@mui/material/Container";
import TitleBlock from "../../shared/titleBlock/titleBlock.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SocialButtons from "../../shared/socialButtons/socialButtons.jsx";
import {contactsData} from "../../data/contacts.data.js";

const Contacts = () => {
    return (
        <Container maxWidth={'xl'} sx={{py: 4}}>
            <TitleBlock title={"Контакты"}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                my:2
            }}>
                <Typography fontWeight={"800"}>
                    {contactsData.adress}
                </Typography>
                <Typography fontWeight={"800"}>
                    {contactsData.phone}
                </Typography>
                <SocialButtons/>
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