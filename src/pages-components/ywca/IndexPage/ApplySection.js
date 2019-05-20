import React from 'react'
import Section from '../components/Section'
import Typograpy from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {},
  container: {
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    paddingBottom: '2rem',
    fontWeight: 400,
  },
  text: {
    '& p': {
      paddingBottom: '1rem',
    },
  },
  frame: {
    width: '100%',
    background: 'white',
    height: '100rem',
    [theme.breakpoints.up('sm')]: {
      height: '93rem',
    },
  },
})

function ApplySection(props) {
  const { classes, content = { title: '', text: '' } } = props
  return (
    <Section name="apply">
      <div className={classes.container}>
        <Typograpy classes={{ root: classes.title }} variant="h2">
          {content.title}
        </Typograpy>
        <Typograpy
          variant="body1"
          classes={{ body1: classes.text }}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
        <iframe
          className={classes.frame}
          src={content.embedUrl}
          frameBorder="0"
          title="StartMyResp Application"
        />
      </div>
    </Section>
  )
}

export default withStyles(styles)(ApplySection)
