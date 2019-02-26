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

const IndexContentSections = ({ content }) => {
  const { introContent, aboutContent } = content
  return (
    <Fragment>
      <AboutSection content={aboutContent} />
      <IntroSection content={introContent} />
    </Fragment>
  )
}

export default IndexContentSections
