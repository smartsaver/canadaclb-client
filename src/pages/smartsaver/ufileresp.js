import React from 'react'
import Layout from '../../orgs/smartsaver/sections/ufileresp/UfilerespLayout'
import Banner from '../../orgs/smartsaver/sections/ufileresp/Banner'
import ApplySection from '../../orgs/smartsaver/sections/ufileresp/ApplySection'
import UfileVideoSection from '../../orgs/smartsaver/sections/ufileresp/UfileVideo'
import allContent from '../../orgs/smartsaver/content/ufileresp/index'

const { introContent, applyContent, bannerContent } = allContent

const UfilerespPage = () => {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <UfileVideoSection url={bannerContent.videoUrl} content={introContent} />
      <ApplySection content={applyContent} />
    </Layout>
  )
}

export default UfilerespPage
