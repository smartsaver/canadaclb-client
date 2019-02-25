import React from 'react'
import Layout from './ImpotexpertLayout'
import Banner from './Banner'
import IntroSection from './IntroSection'
import ApplySection from './ApplySection'
import FooterSection from '../../smartsaver/ufileresp/FooterSection'
import allContent from './content'

const { applyContent, introContent, bannerContent, footerContent } = allContent

const ImpotexpertreeePage = () => {
  return (
    <Layout seoTitle="ImpôtExpert" seoContent={bannerContent.seoContent}>
      <Banner content={bannerContent} />
      <IntroSection content={introContent} />
      <ApplySection content={applyContent} />
      <FooterSection content={footerContent} />
    </Layout>
  )
}

export default ImpotexpertreeePage
