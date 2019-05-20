import React from 'react'
import Section from './Section'
import SurveyForm from '../../../bulma-components/SurveyForm'
import style from './ApplySection.module.css'

const ApplySection = props => {
  const { content, embedUrl, footerContent, title } = props.content
  return (
    <Section name="appliquer" className={style.ApplySection}>
      <h2 className="title is-3">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <SurveyForm isEnabled={true} name="reee">
        <iframe
          className={style.SurveyFrame}
          src={embedUrl}
          title="ImpotExpert Application"
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
