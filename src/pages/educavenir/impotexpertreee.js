import React from 'react'
import Layout from '../../orgs/educavenir/sections/impotexpertreee/ImpotexpertLayout'
import Banner from '../../orgs/educavenir/sections/impotexpertreee/Banner'
import Section from '../../orgs/educavenir/sections/impotexpertreee/Section'
import ApplySection from '../../orgs/educavenir/sections/impotexpertreee/ApplySection'
import allContent from '../../orgs/educavenir/content/impotexpertreee/index'

const { applyContent, introContent, bannerContent } = allContent

const IntroSection = () => {
  const { content } = introContent
  return (
    <Section>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  )
}

const ImpotexpertreeePage = () => {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <IntroSection />
      <ApplySection content={applyContent} />
    </Layout>
  )
}

export default ImpotexpertreeePage
