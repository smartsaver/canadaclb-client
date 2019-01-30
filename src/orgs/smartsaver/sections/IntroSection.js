import React from 'react'
import Section from './Section'
import {
  introContent,
  instructionContent,
  participateContent,
} from '../content/introContent'

const IntroSection = () => {
  return (
    <div>
      <Section className="Section--Smartsaver-theme">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: introContent.intro }}
        />
      </Section>
      <Section className="Section--Smartsaver-theme">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: instructionContent.intro }}
        />
      </Section>
      <Section className="Section--Smartsaver-theme">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: participateContent.intro }}
        />
      </Section>
    </div>
  )
}

export default IntroSection
