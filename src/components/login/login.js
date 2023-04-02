import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';
import { useState } from "react";
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles(() => {
//     return {
//         container: {
//             padding: '2em'
//         },
//         field: {
//             display: 'block',
//             marginTop: '1em',
//             marginBottom: '1em'
//         }
//     }
// })
export default function LoginFormDialog({ open, onClose }) {
    // const [open, setOpen] = React.useState(false);
    // const classes = useStyles();
    const [formValues, setFormValues] = useState({
        email: {
            value: '',
            error: false,
            errorMessage: 'You must enter a email'
        },
        password: {
            value: '',
            error: false,
            errorMessage: 'You must enter an password'
        },
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formFields = Object.keys(formValues);
        let newFormValues = { ...formValues }
        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];
            const currentValue = formValues[currentField].value;

            if (currentValue === '') {
                newFormValues = {
                    ...newFormValues,
                    [currentField]: {
                        ...newFormValues[currentField],
                        error: true
                    }
                }
            }

        }

        setFormValues(newFormValues)
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <form noValidate onSubmit={handleSubmit} >
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={formValues.email.value}
                            onChange={handleChange}
                            error={formValues.email.error}
                            helperText={formValues.email.error && formValues.email.errorMessage}
                        />
                        <TextField
                            autoFocus
                            id="password"
                            name="password"
                            label="Password"
                            margin='normal'
                            type="password"
                            fullWidth
                            variant="standard"
                            value={formValues.password.value}
                            onChange={handleChange}
                            error={formValues.password.error}
                            helperText={formValues.password.error && formValues.password.errorMessage}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button type="submit" variant="contained" >Login</Button>
                            <Divider />
                            <Button variant="outlined" sx={{ color: 'black' }}>
                                Sign in with Google
                            </Button>
                            {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button> */}
                        </Stack>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}