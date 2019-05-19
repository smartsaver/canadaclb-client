import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  logo: {
    maxWidth: '6rem',
  },
})

function NavbarBrand(props) {
  const { classes, logo, alt } = props
  return (
    <a href="./#">
      <img className={classes.logo} src={logo} alt={alt} />
    </a>
  )
}

export default withStyles(styles)(NavbarBrand)
