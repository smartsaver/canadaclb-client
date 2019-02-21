import React from 'react'
import Layout from '../../orgs/smartsaver/sections/ufileresp/UfilerespLayout'
import Banner from '../../orgs/smartsaver/sections/ufileresp/Banner'
import ApplySection from '../../orgs/smartsaver/sections/ufileresp/ApplySection'
import UfileVideoSection from '../../orgs/smartsaver/sections/ufileresp/UfileVideo'
import FooterSection from '../../orgs/smartsaver/sections/ufileresp/FooterSection'
import allContent from '../../orgs/smartsaver/content/ufileresp/index'

const { introContent, applyContent, bannerContent, footerContent } = allContent

const UfilerespPage = () => {
  return (
    <Layout seoTitle="UFile" seoContent={bannerContent.content}>
      <Banner content={bannerContent} />
      <UfileVideoSection url={bannerContent.videoUrl} content={introContent} />
      <ApplySection content={applyContent} />
      <FooterSection content={footerContent} />
    </Layout>
  )
}

export default UfilerespPage
