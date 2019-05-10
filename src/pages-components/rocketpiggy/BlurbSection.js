import React from 'react'
import Section from './components/Section'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import pink from '@material-ui/core/colors/pink'

const styles = () => ({
  root: {
    backgroundColor: pink[100],
    minHeight: '30rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '50rem',
    margin: '0 auto',
  },
  title: {
    marginBottom: '2rem',
    fontSize: '3rem',
  },
})

function BlurbSection(props) {
  const { classes, content } = props
  return (
    <Section className={classes.root}>
      <div className={classes.container}>
        <Typography
          classes={{
            root: classes.title,
          }}
          variant="h2"
          align="center"
        >
          {content.title}
        </Typography>
        <Typography variant="body1" align="center">
          {content.text}
        </Typography>
      </div>
    </Section>
  )
}

export default withStyles(styles)(BlurbSection)
