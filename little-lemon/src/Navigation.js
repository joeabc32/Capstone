import logo from "./images/Logo.svg";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { IconButton, Stack, Typography } from "@mui/material";


function Navigation() {
    return (
        <AppBar position="static" color="primary" style={{ backgroundColor: "white" }}>
            <Toolbar style={{ paddingLeft: "20vw", paddingBottom: "15px", paddingTop: "15px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
                <IconButton size="large" edge="start" aria-label='logo' style={{ paddingRight: "150px" }}>
                    <img src={logo} width={300}></img>
                </IconButton>
                <Stack direction='row' spacing={6} style={{ paddingRight: "20vw", paddingTop: "10px", display: "flex", flexWrap: "wrap", color: "black", justifyContent: "space-evenly", fontWeight: "bold" }}>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>Home</Button>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>About</Button>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>Menu</Button>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>Reservation</Button>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>Order Online</Button>
                    <Button color="inherit" style={{ fontWeight: "bold", fontFamily: "Inter, sans-serif" }}>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};

export default Navigation;