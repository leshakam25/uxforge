import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import ContactButton from "../../components/contactButton/contactButton.jsx";

const MobileMenu = ({pagesList}) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (link) => {
        navigate(link)
        setAnchorElNav(null);
    };

    return (
        <Box sx={{display: {xs: 'flex', md: 'none'}, alignItems: 'center'}}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: 'block', md: 'none'},
                }}
            >
                {pagesList.map((page, id) => (
                    <MenuItem key={id} onClick={()=>handleCloseNavMenu(page.link)}>
                        <Typography variant={'body1'} textAlign="center">{page.title}</Typography>
                    </MenuItem>
                ))}
            </Menu>

        </Box>
    );
};

export default MobileMenu;