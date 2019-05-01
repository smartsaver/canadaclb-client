import React from 'react'
import withRoot from '../../theme/withRoot'
import Typography from '@material-ui/core/Typography'
import Layout from './Layout'

const RocketPiggyPage = () => {
  return (
    <Layout>
      <Typography>Hello World</Typography>
    </Layout>
  )
}

export default withRoot(RocketPiggyPage)
