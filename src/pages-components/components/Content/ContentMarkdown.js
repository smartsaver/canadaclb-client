import React from 'react'
import marked from '../../../libs/marked'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  root: {
    '& p': {
      marginBottom: '1rem',
    },
    '& p:last-child': {
      marginBottom: 0,
    },
  },
}

/**
 *
 * @param {String} text
 * @param {String} className
 */

function ContentMarkdown(props) {
  const { text, className = '', classes } = props

  if (text) {
    return (
      <Typography className={`${classes.root} ${className}`} component="div">
        <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
      </Typography>
    )
  } else {
    return null
  }
}

export default withStyles(styles)(ContentMarkdown)
