import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import ListItem from '@material-ui/core/ListItem'
import logo from '../../../../images/rocketpiggy/rocket-piggy-logo.png'
import { withStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'

const styles = theme => ({
  logo: {
    maxWidth: '6rem',
  },
  appBar: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  appBar__container: {
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
  },
  appBar__Toolbar: {
    justifyContent: 'space-between',
  },
  appBar__Items: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  drawer: {
    maxWidth: 300,
    width: 200,
  },
  burger: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
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
    return (
      <nav>
        <AppBar className={classes.appBar} color="inherit">
          <div className={classes.appBar__container}>
            <Toolbar className={classes.appBar__Toolbar}>
              <a href="./#">
                <img className={classes.logo} src={logo} alt="Rocket Piggy" />
              </a>
              <div className={classes.appBar__Items}>
                <a href="#apply">
                  <Button variant="outlined">Apply</Button>
                </a>
              </div>
              <IconButton
                className={classes.burger}
                color="inherit"
                onClick={this.onBurgerClick}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </div>
        </AppBar>
        <Drawer
          anchor="right"
          variant="temporary"
          open={state.isDrawerOpen}
          onClose={this.onDrawerClose}
        >
          <List className={classes.drawer}>
            <ListItem button onClick={this.onDrawerClose}>
              <CloseIcon onClick={this.onDrawerClose} />
            </ListItem>
            <a href="#apply">
              <ListItem button>Apply</ListItem>
            </a>
          </List>
        </Drawer>
      </nav>
    )
  }
}

export default withStyles(styles)(Navbar)
