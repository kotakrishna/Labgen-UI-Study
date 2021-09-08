import { Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


export default function AddNewRecord() {
    const classes = useStyles();
    return (
        <>
         <Typography variant="h6" gutterBottom>
             Client Dictionary
         </Typography>

        <Grid container spacing={3}>
             <Grid item xs={3}>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        </Grid>
        </>
    )
}
