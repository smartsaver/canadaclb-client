import React from 'react'
import Section from '../../components/Section'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0',
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: 24,
    fontWeight: 300,
    maxWidth: '59rem',
    '& + &': {
      marginTop: '1.5rem',
    },
    '& strong': {
      fontWeight: 700,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
})

function Promotion(props) {
  const { classes } = props
  return (
    <Section className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.text}
          color="secondary"
          paragraph
          align="center"
        >
          Future Bright is a <strong>free EFry program</strong> that helps
          parents and guardians access the Canada Learning Bond for their
          child(ren).
        </Typography>
        <Typography
          className={classes.text}
          color="secondary"
          paragraph
          align="center"
        >
          This money is free for you to claim for your child(ren) and you
          don&apos;t have to contribute any money yourself.
        </Typography>
      </div>
    </Section>
  )
}

export default withStyles(styles)(Promotion)
