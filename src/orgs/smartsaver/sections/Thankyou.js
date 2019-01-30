import React from 'react'
import Section from './Section'
import thankyouSectionContent from '../content/thankYouSectionContent'

const Thankyou = () => {
  const { intro } = thankyouSectionContent
  return (
    <Section className="Section--Smartsaver-theme">
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
    </Section>
  )
}

export default Thankyou
