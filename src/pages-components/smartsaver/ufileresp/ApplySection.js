import React from 'react'
import Section from './Section'
import SurveyForm from '../../../components/SurveyForm'

import style from './ApplySection.module.css'

const ApplySection = props => {
  const { content, embedUrl, footerContent, title } = props.content
  return (
    <Section name="apply" className={style.ApplySection}>
      <h2 className="title is-3">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <SurveyForm isEnabled={true}>
        <iframe
          className={style.SurveyFrame}
          src={embedUrl}
          title="UFile RESP Application"
        />
      </SurveyForm>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: footerContent }}
      />
    </Section>
  )
}

export default ApplySection
