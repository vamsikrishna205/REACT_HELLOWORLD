import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ComplexGrid from './contact'
import Complex from './contact_2'
import ComplexG from './contact_3'
import Classprops from '../inside_Body/main_body'

const useStyles = makeStyles((theme) => ({
    side_bar: {
        flexGrow: 0.3,
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    Right_Grid: {
        padding: theme.spacing(10),
    },
}));

export default function SimpleContainer() {
    const classes = useStyles();
    return (
        <Grid container item lg={12}>
            <Grid className={classes.side_bar} item lg={5} >
                <Grid container className="Left_Grid" spacing={3}>
                    <Grid item >
                        Messages
                    </Grid>
                    <Grid item style={{ color: 'blue' }}>
                        <Classprops />
                    </Grid>
                </Grid>
                <Grid container className="Left_Grid" spacing={3}>
                    <Grid item >
                        <ComplexGrid />
                    </Grid>
                </Grid>
                <Grid container className="Left_Grid" spacing={3}>
                    <Grid item >
                        <Complex />
                    </Grid>
                </Grid>
                <Grid container className="Left_Grid" spacing={3}>
                    <Grid item >
                        <ComplexG />
                    </Grid>
                </Grid>

            </Grid>
            <Grid container className={classes.Right_Grid} spacing={3} item lg={7}>
                <Classprops />
            </Grid>
        </Grid >
    );
}
