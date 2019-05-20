import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

const styles = () => ({
  drawer: {
    maxWidth: 300,
    width: 200,
  },
  drawerLink: {
    textDecoration: 'none',
  },
})

function NavbarDrawer(props) {
  const { classes } = props
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={props.open}
      onClose={props.onClose}
    >
      <List className={classes.drawer}>
        <ListItem button onClick={props.onClose}>
          <CloseIcon onClick={props.onClose} />
        </ListItem>
        <a href="#apply" className={classes.drawerLink}>
          <ListItem button>
            <Typography variant="body1">Apply</Typography>
          </ListItem>
        </a>
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(NavbarDrawer)
