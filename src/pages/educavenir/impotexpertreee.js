import React from 'react'
import Layout from '../../orgs/educavenir/sections/impotexpertreee/ImpotexpertLayout'
import Banner from '../../orgs/educavenir/sections/impotexpertreee/Banner'
import IntroSection from '../../orgs/educavenir/sections/impotexpertreee/IntroSection'
import ApplySection from '../../orgs/educavenir/sections/impotexpertreee/ApplySection'
import FooterSection from '../../orgs/smartsaver/sections/ufileresp/FooterSection'
import SEO from '../../components/Seo'
import allContent from '../../orgs/educavenir/content/impotexpertreee/index'

const { applyContent, introContent, bannerContent, footerContent } = allContent

const ImpotexpertreeePage = () => {
  return (
    <Layout>
      <SEO
        title="ImpôtExpert"
        description={bannerContent.seoContent}
        lang="fr"
        keywords={['reee', 'éducation', 'ImpôtExpert']}
      />
      <Banner content={bannerContent} />
      <IntroSection content={introContent} />
      <ApplySection content={applyContent} />
      <FooterSection content={footerContent} />
    </Layout>
  )
}

export default ImpotexpertreeePage
