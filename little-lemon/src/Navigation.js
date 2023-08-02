import logo from "./images/Logo.svg";
import cross from './images/cross.png'
import menu from './images/menu.svg'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Navigation() {
    const navigate = useNavigate();
    const [mobileMenu, setMobileMenu] = useState(false);

    function navigateHome() {
        navigate('/');
    }

    function navigateReserve() {
        navigate('/reserve');
    }

    function mobileActive() {
        setMobileMenu(!mobileMenu);
    }


    return (
        <AppBar position="static" color="primary" style={{ backgroundColor: "white" }}>
            <Toolbar className="nav-toolbar">
                <IconButton onClick={navigateHome} size="large" edge="start" aria-label='logo'>
                    <img className="main-logo" src={logo}></img>
                </IconButton>
                <Stack id="nav-stack" direction='row' spacing={5} edge='end'>
                    <Button onClick={navigateHome} color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Menu</Button>
                    <Button onClick={navigateReserve} color="inherit">Reservation</Button>
                    <Button color="inherit">Order Online</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <IconButton onClick={mobileActive} className="mobile-menu" edge='end' aria-label="menu"><img src={mobileMenu ? cross : menu}
                    className="mobile-menu" width='35px' height='35px'></img></IconButton>
            </Toolbar>
            <Stack id="mobile-stack" direction='column' spacing={1} sx={{ display: mobileMenu ? 'flex' : 'none', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: "20px" }}>
                <Button size="small" color="inherit">Home</Button>
                <Button size="small" color="inherit">About</Button>
                <Button size="small" color="inherit">Menu</Button>
                <Button size="small" color="inherit">Reservation</Button>
                <Button size="small" color="inherit">Order Online</Button>
                <Button size="small" color="inherit">Login</Button>
            </Stack>
        </AppBar>
    )
};

export default Navigation;