import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import NavbarDrawer from './NavbarDrawer'
import NavbarBurger from './NavbarBurger'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  AppBar: {
    backgroundColor: grey[900],
    alignItems: 'center',
  },
  Container: {
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
  },
  Toolbar: {
    justifyContent: 'space-between',
  },
  Items: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
})

class Navbar extends Component {
  state = {
    isDrawerOpen: false,
  }

  onBurgerClick = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
  }

  onDrawerClose = () => {
    this.setState({ isDrawerOpen: false })
  }

  render() {
    const { classes } = this.props
    const { state, props } = this

    const Container = ({ children }) => (
      <div className={classes.Container}>{children}</div>
    )

    const Items = ({ children }) => (
      <div className={classes.Items}>{children}</div>
    )

    return (
      <nav>
        <AppBar className={classes.AppBar} color="inherit">
          <Container>
            <Toolbar className={classes.Toolbar}>
              {props.brand}
              <NavbarBurger onClick={this.onBurgerClick} />
              <Items>
                <a href="./#apply">
                  <Button variant="contained">Apply</Button>
                </a>
              </Items>
            </Toolbar>
          </Container>
        </AppBar>
        <NavbarDrawer open={state.isDrawerOpen} onClose={this.onDrawerClose} />
      </nav>
    )
  }
}

export default withStyles(styles)(Navbar)
