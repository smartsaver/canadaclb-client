import React from 'react'
import Section from './Section'
import style from './IntroSection.module.css'

const IntroSection = props => {
  const { content } = props.content
  return (
    <Section>
      <div
        className={`
          content
          ${style.Content}
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Section>
  )
}

export default IntroSection
