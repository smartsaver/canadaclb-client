import React from 'react'
import Section from '../components/Section'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: grey[800],
  },
  frame: {
    width: '100%',
    minHeight: '20rem',
    maxWidth: '480px',
  },
  title: {
    paddingBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '1.9rem',
    color: 'white',
  },
  container: {
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
  },
})

function VideoSection(props) {
  const { classes, content = { title: '' } } = props
  return (
    <Section className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="h2"
          classes={{
            root: classes.title,
          }}
        >
          {content.title}
        </Typography>
        <iframe
          className={classes.frame}
          title="Youtube Video"
          src={props.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </Section>
  )
}

export default withStyles(styles)(VideoSection)
