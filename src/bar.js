import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";

function Item(props: { children: ReactNode }) {
    return null;
}

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"><Toolbar className="toolbar">

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Button color="inherit">Start</Button>
                    </Grid>
                    <Grid item xs={2}>
                            <Button color="inherit">Über mich</Button>
                </Grid>
                    <Grid item xs={2}>
                            <Button color="inherit">Kontakt</Button>
                    </Grid>
                    <Grid item xs={2}>
                            <Button color="inherit">Kundenzugang</Button>
                    </Grid>
                    <Grid item xs={2}>
                            <Button color="inherit">Portfolio</Button>
                    </Grid>
                    <Grid item xs={2}>
                            <Button color="inherit">Online Buchen</Button>
                    </Grid>
                </Grid>


                    <Button color="inherit">Online Buchen</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}