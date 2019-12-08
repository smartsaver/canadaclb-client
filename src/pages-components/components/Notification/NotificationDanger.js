import React, { useState } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'
import IconButton from '@material-ui/core/IconButton'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'

const styles = theme => ({
  root: {
    position: 'relative',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '2rem',
    padding: '1rem',
    background: red[100],
    [theme.breakpoints.up('md')]: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
    },
  },
  closeButton: {
    position: 'absolute',
    top: -1,
    right: -1,
  },
  closeIcon: {
    color: grey[600],
    opacity: 0.7,
  },
})

function NotificationDanger(props) {
  const { classes, className, children } = props
  const [isVisible, setVisible] = useState(true)

  const handleDismiss = () => {
    setVisible(false)
  }

  if (isVisible) {
    return (
      <div className={`${classes.root} ${className}`}>
        <IconButton onClick={handleDismiss} className={classes.closeButton}>
          <CancelRoundedIcon className={classes.closeIcon} />
        </IconButton>
        {children}
      </div>
    )
  } else {
    return null
  }
}

export default withStyles(styles)(NotificationDanger)
