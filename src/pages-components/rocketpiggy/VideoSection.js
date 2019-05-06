import React from 'react'
import grey from '@material-ui/core/colors/grey'
import Section from './components/Section'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  root: {
    textAlign: 'center',
    backgroundColor: grey[300],
  },
  frame: {
    width: '100%',
    minHeight: '20rem',
    maxWidth: '480px',
  },
})

function VideoSection(props) {
  const { classes } = props
  return (
    <Section className={classes.root}>
      <iframe
        className={classes.frame}
        title="Youtube Video"
        src={props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </Section>
  )
}

export default withStyles(styles)(VideoSection)
