import React, { Fragment } from 'react'
import Section from './IndexSection'
import Content from '../../bulma-components/Content'
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

const ContactSection = props => {
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

const IndexContentSections = ({ content }) => {
  const { introContent, aboutContent, contactContent } = content
  return (
    <Fragment>
      <AboutSection content={aboutContent} />
      <ContactSection content={contactContent} />
      <IntroSection content={introContent} />
    </Fragment>
  )
}

export default IndexContentSections
