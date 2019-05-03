import React from 'react'
import withRoot from '../../theme/withRoot'
import Layout from './Layout'
import Banner from './RocketPiggyBanner'
import contentList from './content'
import ApplySection from './ApplySection'

const RocketPiggyPage = () => {
  return (
    <Layout>
      <Banner content={contentList.bannerContent} />
      <ApplySection content={contentList.applyContent} />
    </Layout>
  )
}

export default withRoot(RocketPiggyPage)
