import React from 'react'
import Section from '../components/Section'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  title: {
    fontSize: '2rem',
    fontWeight: '400',
    marginBottom: '2rem',
  },
  text: {
    margin: '2rem 0 1rem 0',
  },
  frame: {
    width: '100%',
    minHeight: '35rem',
  },
}

function YWCASurveySection(props) {
  const { classes, content } = props
  return (
    <Section name="survey">
      <Typography variant="h2" classes={{ root: classes.title }}>
        {content.title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        classes={{ root: classes.text }}
      >
        <div dangerouslySetInnerHTML={{ __html: content.text }} />
      </Typography>
      <iframe
        className={classes.frame}
        src={props.url}
        frameBorder="0"
        title="YWCA Survey"
      />
      <Typography
        variant="body1"
        component="div"
        classes={{ root: classes.text }}
      >
        <div dangerouslySetInnerHTML={{ __html: content.footerText }} />
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(YWCASurveySection)
