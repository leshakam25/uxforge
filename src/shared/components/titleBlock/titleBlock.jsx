import React from 'react';
import Typography from "@mui/material/Typography";

const TitleBlock = ({title}) => {
    return (
        <Typography
            variant={"h1"}
            component={'div'}
            sx={{
                py:10,
                my:5,
                mt:15,
                opacity:0.9,
                px:2
            }}
        >
            {title}
        </Typography>
    );
};

export default TitleBlock;