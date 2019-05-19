import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 4rem',
    },
  },
})

function Section(props) {
  const { classes, children, className = '' } = props
  return (
    <section id={props.name} className={`${classes.root} ${className}`}>
      {children}
    </section>
  )
}

export default withStyles(styles)(Section)
