import React from 'react';
import Box from "@mui/material/Box";
import ServicesListItem from "./servicesListItem.jsx";
import {services} from "../../../../data/services.data.js";

const ServicesList = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
        }}>
            {services && services.map((el, i) => (
                <ServicesListItem
                    key={i}
                    services={el}
                    stages={el.stages}
                />
            ))}

        </Box>
    );
};

export default ServicesList;