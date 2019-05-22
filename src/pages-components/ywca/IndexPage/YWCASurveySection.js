import React from 'react'
import Section from '../components/Section'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  frame: {
    width: '100%',
    minHeight: '35rem',
  },
}

function YWCASurveySection(props) {
  const { classes } = props
  return (
    <Section name="survey">
      <iframe
        className={classes.frame}
        src={props.url}
        frameBorder="0"
        title="YWCA Survey"
      />
    </Section>
  )
}

export default withStyles(styles)(YWCASurveySection)
