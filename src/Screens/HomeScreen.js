import React from 'react'
import {withStyles, Grid} from '@material-ui/core'
import image from '../assets/images/icon.png'

function HomeScreen(props) {
    const classes = props.classes
    return(
        <div className={classes.main}>
            <img src={image} className={classes.logo}/>
            <Grid container direction='column'>
                <Grid item>xxx</Grid>
                <Grid item>dddx</Grid>
            </Grid>
        </div>
    )
}

const styles = {
    main: {
        justifyContent: 'center'
    },
    logo: {
        height: '125px',
        width: '125px'
    }
};
  
export default withStyles(styles)(HomeScreen);