import React from 'react'
import Layout from '../../orgs/smartsaver/sections/ufileresp/UfilerespLayout'
import Section from '../../orgs/smartsaver/sections/ufileresp/Section'
import Banner from '../../orgs/smartsaver/sections/ufileresp/Banner'
import SurveyForm from '../../components/SurveyForm'
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

const ApplySection = () => {
  const { content, embedUrl, footerContent, title } = applyContent
  return (
    <Section name="apply">
      <h2 className="title is-3">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <SurveyForm isEnabled={true}>
        <iframe src={embedUrl} title="UFile RESP Application" />
      </SurveyForm>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: footerContent }}
      />
    </Section>
  )
}

const UfilerespPage = () => {
  return (
    <Layout>
      <Banner content={bannerContent} />
      <UfileVideoSection url={bannerContent.videoUrl} />
      <IntroSection />
      <ApplySection />
    </Layout>
  )
}

export default UfilerespPage
