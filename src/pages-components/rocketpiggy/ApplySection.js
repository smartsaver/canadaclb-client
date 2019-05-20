import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from './components/Section'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    minHeight: '15rem',
    backgroundColor: blue[800],
  },
  container: {
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
  },
  Typography: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      marginRight: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
      width: '70%',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: '400',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      marginRight: '40%',
    },
  },
  text: {
    '& a': {
      color: yellow[500],
    },
    '& a:hover': {
      color: yellow[600],
    },
    '& p': {
      marginBottom: '1rem',
    },
    '& p > em:first-child': {
      marginLeft: '1rem',
    },
  },
  surveyFrame: {
    width: '100%',
    background: 'white',
    height: '100rem',
    [theme.breakpoints.up('sm')]: {
      height: '93rem',
    },
  },
})

function ApplySection(props) {
  const { classes, content } = props
  return (
    <Section className={classes.root} name="apply">
      <div className={classes.container}>
        <Typography
          classes={{ root: `${classes.title} ${classes.Typography}` }}
          variant="h2"
        >
          {content.title}
        </Typography>
        <Typography
          variant="body1"
          classes={{ root: `${classes.Typography} ${classes.text}` }}
          component="div"
        >
          <div dangerouslySetInnerHTML={{ __html: content.text }} />
        </Typography>

        <iframe
          className={classes.surveyFrame}
          title="RespSurveyUrl"
          src={content.respSurveyUrl}
          frameBorder="0"
        />
      </div>
    </Section>
  )
}

export default withStyles(styles)(ApplySection)
