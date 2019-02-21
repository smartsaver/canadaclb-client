import React from 'react'
import Layout from '../../orgs/educavenir/sections/impotexpertreee/ImpotexpertLayout'
import Banner from '../../orgs/educavenir/sections/impotexpertreee/Banner'
import IntroSection from '../../orgs/educavenir/sections/impotexpertreee/IntroSection'
import ApplySection from '../../orgs/educavenir/sections/impotexpertreee/ApplySection'
import FooterSection from '../../orgs/smartsaver/sections/ufileresp/FooterSection'
import allContent from '../../orgs/educavenir/content/impotexpertreee/index'

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
