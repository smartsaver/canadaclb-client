import React from 'react'
import withRoot from '../../theme/withRoot'
import Layout from './Layout'
import Banner from './RocketPiggyBanner'
import contentList from './content'
import ApplySection from './ApplySection'
import VideoSection from './VideoSection'
import SEO from '../../components/Seo/index'

const RocketPiggyPage = () => {
  return (
    <Layout>
      <SEO title="RocketPiggy" />
      <main>
        <Banner content={contentList.bannerContent} />
        <VideoSection url="https://www.youtube.com/embed/ev6ZtfjRdBg" />
        <ApplySection content={contentList.applyContent} />
      </main>
    </Layout>
  )
}

export default withRoot(RocketPiggyPage)
