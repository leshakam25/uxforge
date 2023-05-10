import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import FeedbackButton from "../../../components/feedbackButton/feedbackButton.jsx";

const DesktopMenu = ({pagesList}) => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: {xs: 'none', md: 'flex'},
            alignItems: "center"
        }}>
            {pagesList.map((page, id) => (
                <Button
                    key={id}
                    onClick={()=> navigate(page.link)}
                    sx={{my: 2, color: 'white', display: 'block', textTransform: 'none'}}
                >
                    <Typography   variant={'body1'}>{page.title}</Typography>
                </Button>
            ))}
           <FeedbackButton mx={1}/>
        </Box>
    );
};

export default DesktopMenu;