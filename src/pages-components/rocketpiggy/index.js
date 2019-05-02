import React from 'react'
import withRoot from '../../theme/withRoot'
import Layout from './Layout'
import Banner from './RocketPiggyBanner'

const RocketPiggyPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  )
}

export default withRoot(RocketPiggyPage)
