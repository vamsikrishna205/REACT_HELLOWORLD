import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import ImageAvatars from './Avatar_Image'

const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 80,
        height: 80,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '80%',
        maxHeight: '80%',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root1}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <ImageAvatars />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={10}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" >
                                    <bold>Welcome Aboard!</bold>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Have a good weekend! See you Monday morning!
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">10:33 AM</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
