import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import logoBig from '../../images/rocketpiggy/rocket-piggy-logo-big.png'

const styles = theme => ({
  root: {
    paddingTop: '5rem',
    backgroundColor: 'white',
    paddingBottom: '3rem',
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
      marginTop: '-3rem',
    },
  },
  logoContainer: {
    order: 0,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  textContainer: {
    order: 1,
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      order: 0,
      padding: '4rem 0 0 4rem',
    },
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
  },
})

function RocketPiggyBanner(props) {
  const { classes, content } = props
  return (
    <section className={classes.root}>
      <div className={classes.Container}>
        <Grid container spacing={0}>
          <Grid classes={{ item: classes.textContainer }} item xs={12} md={6}>
            <Typography classes={{ root: classes.title }} variant="h1">
              {content.title}
            </Typography>
            <Typography
              classes={{ root: classes.subtitle }}
              variant="subtitle1"
            >
              {content.subtitle}
            </Typography>
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
