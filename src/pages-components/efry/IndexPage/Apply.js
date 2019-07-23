import React from 'react'
import Section from '../../components/Section'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core'
import marked from '../../../libs/marked'

const SMARTSAVER_EMBED_URL = 'https://mysmartfuture.org/efry'

const styles = () => ({
  frame: {
    width: '100%',
    margin: '1rem 0',
    background: 'white',
    minHeight: '43rem',
  },
})

function Apply(props) {
  const { classes } = props
  return (
    <Section name="apply">
      <Typography variant="h2" paragraph>
        Apply For Your Child’s Canada Learning Bond Today!
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(`
Apply for your child’s Canada Learning Bond using the form below.

If you cannot see the form, [click here.](${SMARTSAVER_EMBED_URL})
      `),
        }}
      />
      <iframe
        id="resp"
        className={classes.frame}
        src={SMARTSAVER_EMBED_URL}
        frameBorder="0"
        title="StartMyResp Application"
      />
    </Section>
  )
}

export default withStyles(styles)(Apply)
