import React from 'react'
import Layout from '../../orgs/smartsaver/sections/ufileresp/UfilerespLayout'
import Section from '../../orgs/smartsaver/sections/ufileresp/Section'
import Banner from '../../orgs/smartsaver/sections/ufileresp/Banner'
import SurveyForm from '../../components/SurveyForm'
import ApplySection from '../../orgs/smartsaver/sections/ufileresp/ApplySection'
import UfileVideoSection from '../../orgs/smartsaver/sections/ufileresp/UfileVideo'
import allContent from '../../orgs/smartsaver/content/ufileresp/index'

const { introContent, applyContent, bannerContent } = allContent

const IntroSection = () => {
  const { content } = introContent
  return (
    <Section>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  )
}

const UfilerespPage = () => {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <UfileVideoSection url={bannerContent.videoUrl} />
      <IntroSection />
      <ApplySection content={applyContent} />
    </Layout>
  )
}

export default UfilerespPage
