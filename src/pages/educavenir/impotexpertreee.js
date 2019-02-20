import React from 'react'
import Layout from '../../orgs/educavenir/sections/impotexpertreee/ImpotexpertLayout'
import Banner from '../../orgs/educavenir/sections/impotexpertreee/Banner'
import IntroSection from '../../orgs/educavenir/sections/impotexpertreee/IntroSection'
import ApplySection from '../../orgs/educavenir/sections/impotexpertreee/ApplySection'
import allContent from '../../orgs/educavenir/content/impotexpertreee/index'

const { applyContent, introContent, bannerContent } = allContent

const ImpotexpertreeePage = () => {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <IntroSection content={introContent} />
      <ApplySection content={applyContent} />
    </Layout>
  )
}

export default ImpotexpertreeePage
