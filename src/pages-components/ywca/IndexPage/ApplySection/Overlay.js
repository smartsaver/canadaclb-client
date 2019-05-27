import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

const styles = () => ({
  Overlay: {
    position: 'relative',
    marginBottom: '1rem',
  },
  OverlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    padding: '1rem',
    backgroundColor: '#eeec',
    '&.is-hidden': {
      display: 'none',
    },
    fallbacks: {
      backgroundColor: '#eee',
    },
  },
  Button: {
    backgroundColor: blue[700],
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
  OverlayText: {
    color: red[300],
  },
})

class Overlay extends Component {
  state = {
    isOverlayHidden: false,
  }

  hideOverlay = () => {
    this.setState({ isOverlayHidden: true })
  }

  OverlayBackground = () => {
    const { classes } = this.props
    if (this.state.isOverlayHidden) return null
    return (
      <span className={classes.OverlayBackground}>
        <Typography variant="body1" classes={{ body1: classes.OverlayText }}>
          {'You must complete the survey to continue to the application.'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          classes={{ contained: classes.Button }}
          onClick={this.hideOverlay}
        >
          {"I'm done with the survey"}
        </Button>
      </span>
    )
  }

  render() {
    const { props } = this
    const { classes } = this.props
    return (
      <div className={classes.Overlay}>
        {props.children}
        {this.OverlayBackground()}
      </div>
    )
  }
}

export default withStyles(styles)(Overlay)
