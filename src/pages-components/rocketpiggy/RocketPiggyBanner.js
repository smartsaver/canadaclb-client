import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import logoBig from '../../images/rocketpiggy/rocket-piggy-logo-big.png'

const styles = theme => ({
  root: {
    paddingTop: '5rem',
    // backgroundColor: 'white',
  },
  Container: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.xl,
  },
  logo: {
    width: '100%',
    maxWidth: '15rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '35rem',
    },
  },
  logoContainer: {
    order: 0,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  textContainer: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
})

function RocketPiggyBanner(props) {
  const { classes } = props
  return (
    <section className={classes.root}>
      <div className={classes.Container}>
        <Grid container spacing={0}>
          <Grid classes={{ item: classes.textContainer }} item xs={12} md={6}>
            <Typography variant="h1">Hello World</Typography>
          </Grid>
          <Grid classes={{ item: classes.logoContainer }} item xs={12} md={6}>
            <img className={classes.logo} src={logoBig} alt="RocketPiggy" />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default withStyles(styles)(RocketPiggyBanner)
