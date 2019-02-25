import React, { Fragment } from 'react'
import Section from '../../components/Section'
import Content from '../../components/Content'
import text from '../smartsaver/css-theme/Text.module.css'

const IntroSection = props => {
  const { title, content } = props.content
  return (
    <Section
      className={`
        ${text.Light}
      `}
    >
      <h2 className={`title ${text.Light}`}>{title}</h2>
      <Content html={content} />
    </Section>
  )
}

const AboutSection = props => {
  const { title, content } = props.content
  return (
    <Section
      className={`
        ${text.Light}
      `}
    >
      <h2 className={`title ${text.Light}`}>{title}</h2>
      <Content html={content} />
    </Section>
  )
}

const ContactContent = props => {
  const { title, content } = props.content
  return (
    <Section
      name="contact"
      className={`
        ${text.Light}
      `}
    >
      <h2 className={`title ${text.Light}`}>{title}</h2>
      <Content html={content} />
    </Section>
  )
}

const IndexContentSections = ({ content }) => {
  const { introContent, aboutContent, contactContent } = content
  return (
    <Fragment>
      <IntroSection content={introContent} />
      <AboutSection content={aboutContent} />
      {/* <ContactContent content={contactContent} /> */}
    </Fragment>
  )
}

export default IndexContentSections
