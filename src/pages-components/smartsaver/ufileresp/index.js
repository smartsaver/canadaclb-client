import React from 'react'
import Layout from './UfilerespLayout'
import Banner from './Banner'
import ApplySection from './ApplySection'
import UfileVideoSection from './UfileVideo'
import FooterSection from './FooterSection'
import allContent from './content/index'

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
