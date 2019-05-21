import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  burger: {
    // hide burger desktop and above
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

function NavbarBurger(props) {
  const { classes } = props
  return (
    <IconButton
      className={classes.burger}
      color="inherit"
      onClick={props.onClick}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default withStyles(styles)(NavbarBurger)
