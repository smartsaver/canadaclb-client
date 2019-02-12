import React from 'react'
import Section from './Section'
import Banner from '../../sections/survey/Banner'
import {
  instructionContent,
  participateContent,
} from '../../content/survey/introContent'

const IntroSection = () => {
  return (
    <div>
      <Banner />
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
