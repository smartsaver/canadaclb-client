import React from 'react'
import { Button, ListItem } from '@material-ui/core'
import Navbar from '../../components/Navbar'
import NavbarDrawer from '../../components/Navbar/NavbarDrawer'
import navbarLogo from '../../../images/efry/efry-logo-small.jpg'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  navbarLogo: {
    maxWidth: '12.3rem',
  },
  linkButton: {
    textDecoration: 'none',
  },
  drawerItem: {
    justifyContent: 'center',
  },
})

function Layout(props) {
  const { classes } = props
  const ApplyButton = () => (
    <a href="/efry#apply" className={classes.linkButton}>
      <Button variant="contained" color="secondary">
        Apply
      </Button>
    </a>
  )
  return (
    <>
      <Navbar
        brand={
          <img className={classes.navbarLogo} src={navbarLogo} alt="EFry" />
        }
        menuEnd={<ApplyButton />}
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            <ListItem className={classes.drawerItem}>
              <ApplyButton />
            </ListItem>
          </NavbarDrawer>
        )}
      />
      {props.children}
    </>
  )
}

export default withStyles(styles)(Layout)
