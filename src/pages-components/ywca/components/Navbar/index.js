import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import NavbarDrawer from './NavbarDrawer'
import NavbarBurger from './NavbarBurger'
import { withStyles } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  AppBar: {
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
  Button: {
    backgroundColor: blue[700],
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
})

/**
 * @param {String} appBarClassName - appbar css overrides. I use this to override position fixed.
 */

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
        <AppBar
          className={`${classes.AppBar} ${props.appBarClassName || ''}`}
          color="inherit"
        >
          <Container>
            <Toolbar className={classes.Toolbar}>
              {props.brand}
              <NavbarBurger onClick={this.onBurgerClick} />
              <Items>
                <a href="./#apply">
                  <Button
                    classes={{
                      root: classes.Button,
                    }}
                    color="primary"
                    variant="contained"
                  >
                    Apply
                  </Button>
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
