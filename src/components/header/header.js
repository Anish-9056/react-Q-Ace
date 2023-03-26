import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import LoginFormDialog from '../login/login';
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]
const pages = ['Home', 'Properties', 'About us', 'Contact us'];
function HeaderComp() {
    const [open, setOpen] = React.useState(false);

    // state = { modalOpen: false }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <><AppBar position="static" sx={{ background: 'whitesmoke', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        href="/"
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            flexGrow: 1,
                            textDecoration: 'none',
                        }}
                    >
                        Q & Ace
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        size="small"
                        sx={{
                            width: 300, mr: 2
                        }}
                        renderInput={(params) => <TextField {...params} label="search" />} />
                    <Box sx={{ flexGrow: 0, display: { md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                sx={{ mr: 2, display: 'block' }}
                                component="button"
                                variant="body2"
                            >
                                {page}
                            </Link>
                        ))}
                    </Box>
                    <Button variant="contained" size='small' onClick={handleClickOpen}>Login</Button>
                </Toolbar>
            </Container>
        </AppBar><LoginFormDialog open={open} onClose={handleClose} /></>
    )
}

export default HeaderComp