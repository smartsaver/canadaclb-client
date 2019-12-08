import React from 'react'
import Section from '../../components/Section'
import Typograpy from '@material-ui/core/Typography'
import Overlay from './Overlay'
import withStyles from '@material-ui/core/styles/withStyles'
import Box from '../../../components/Box'

const styles = theme => ({
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
    margin: '1rem 0',
    background: 'white',
    minHeight: '43rem',
  },
  box: {
    marginBottom: '1rem',
  },
})

function ApplySection(props) {
  const { classes, content = { title: '', text: '', footerText: '' } } = props
  return (
    <Section name="resp">
      <div className={classes.container}>
        <Typograpy classes={{ root: classes.title }} variant="h2">
          {content.title}
        </Typograpy>
        <Typograpy
          variant="body1"
          component="div"
          classes={{ body1: classes.text }}
        >
          <div dangerouslySetInnerHTML={{ __html: content.text }} />
        </Typograpy>
        <Box className={classes.box} />
        <Typograpy
          variant="body1"
          component="div"
          classes={{ body1: classes.text }}
        >
          <div dangerouslySetInnerHTML={{ __html: content.footerText }} />
        </Typograpy>
      </div>
    </Section>
  )
}

export default withStyles(styles)(ApplySection)
