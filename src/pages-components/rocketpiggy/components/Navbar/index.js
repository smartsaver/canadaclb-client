import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import NavbarDrawer from './NavbarDrawer'
import Button from '@material-ui/core/Button'
import NavbarBrand from './NavbarBrand'
import NavbarBurger from './NavbarBurger'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  AppBar: {
    backgroundColor: 'white',
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
    const { state } = this

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
              <NavbarBrand />
              <Items>
                <a href="#apply">
                  <Button variant="outlined">Apply</Button>
                </a>
              </Items>
              <NavbarBurger onClick={this.onBurgerClick} />
            </Toolbar>
          </Container>
        </AppBar>
        <NavbarDrawer open={state.isDrawerOpen} onClose={this.onDrawerClose} />
      </nav>
    )
  }
}

export default withStyles(styles)(Navbar)
