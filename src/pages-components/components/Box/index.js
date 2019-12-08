import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import grey from '@material-ui/core/colors/grey'

const styles = {
  root: {
    width: '100%',
    minHeight: '4.5rem',
    background: grey[200],
    borderRadius: '0.1rem',
    boxShadow: '0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)',
  },
}

/**
 * @param {String} className
 */

function Box(props) {
  const { classes, children, className = '' } = props
  return <div className={`${classes.root} ${className}`}>{children}</div>
}

export default withStyles(styles)(Box)
