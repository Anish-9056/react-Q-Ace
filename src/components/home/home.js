import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Learn from '../../learn/learn';
import Props from '../../learn/props';

function HomeComp() {
    return (
        <React.Fragment>
            <Box sx={{ bgcolor: '#cfe8fc' }} >
                <Learn name="Anish" />
                <Props name="Anish" lastname="kumar" />
                {/* <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Welcome to platform where you clarify your Doubts
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid> */}
            </Box>
        </React.Fragment>
    )
}

export default HomeComp