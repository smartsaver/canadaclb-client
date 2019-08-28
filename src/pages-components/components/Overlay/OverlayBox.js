import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    minHeight: '1rem',
    minWidth: '3rem',
    padding: '.3rem 1rem',
    background: '#efefef',
    zIndex: theme.zIndex.mobileStepper,
  },
})

/**
 *
 * @param {*} children
 * @param {Object} classes
 * @param {String} className
 */

function OverlayBox(props) {
  const { classes } = props
  return <section className={classes.root}>{props.children}</section>
}

export default withStyles(styles)(OverlayBox)
