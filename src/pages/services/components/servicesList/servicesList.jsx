import React from 'react';
import Box from "@mui/material/Box";
import ServicesListItem from "./servicesListItem.jsx";
import {services} from "../../../../data/services.data.js";

const ServicesList = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',

        }}>
            {services && services.map((el, i) => (
                <ServicesListItem
                    key={i}
                    services={el}
                />
            ))}
        </Box>
    );
};

export default ServicesList;