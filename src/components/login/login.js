import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';

export default function LoginFormDialog({ open, onClose }) {
    // const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        id="password"
                        label="Password"
                        margin='normal'
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Button variant="contained" onClick={handleClose}>Login</Button>
                        <Divider />
                        <Button variant="outlined" sx={{color:'black'}}>
                            Sign in with Google
                        </Button>
                        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button> */}
                    </Stack>
                </DialogActions>
            </Dialog>
        </div>
    );
}