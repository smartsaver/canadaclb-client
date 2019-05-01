import React from 'react'
import logo from '../../../../images/rocketpiggy/rocket-piggy-logo.png'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  logo: {
    maxWidth: '6rem',
  },
})

function NavbarBrand(props) {
  const { classes } = props
  return (
    <a href="./#">
      <img className={classes.logo} src={logo} alt="Rocket Piggy" />
    </a>
  )
}

export default withStyles(styles)(NavbarBrand)
