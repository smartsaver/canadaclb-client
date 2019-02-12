import React from 'react'
import Layout from '../../orgs/educavenir/sections/impotexpertreee/ImpotexpertLayout'
import Section from '../../orgs/educavenir/sections/impotexpertreee/Section'
import SurveyForm from '../../components/SurveyForm'
import allContent from '../../orgs/educavenir/content/impotexpertreee/index'

const { applyContent, introContent } = allContent

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
    <Section name="appliquer">
      <h2 className="title is-3">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <SurveyForm isEnabled={true}>
        <iframe src={embedUrl} title="ImpotExpert Application" />
      </SurveyForm>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: footerContent }}
      />
    </Section>
  )
}

const ImpotexpertreeePage = () => {
  return (
    <Layout>
      <h1 className="title">ImpotExpertREEE Page</h1>
      <IntroSection />
      <ApplySection />
    </Layout>
  )
}

export default ImpotexpertreeePage
