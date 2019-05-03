import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    padding: '1rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 4rem',
    },
  },
})

function Section(props) {
  const { classes, children } = props
  return <section className={classes.root}>{children}</section>
}

export default withStyles(styles)(Section)
