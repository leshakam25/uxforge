import React from 'react';
import CasesItem from "./casesItem.jsx";
import Box from "@mui/material/Box";

const Cases = ({cases}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            {cases && cases.map((el, i) => (
                <CasesItem
                    key={i}
                    cases={el}
                />
            ))}
        </Box>
    );
};

export default Cases;