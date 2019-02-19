import React from 'react'
import Section from '../../../../components/Section'
import style from './Banner.module.css'

/**
 * @function UfilerespBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const UfilerespBanner = props => {
  const { intro, title, content } = props.content
  return (
    <header>
      <Section
        className={`
          section 
          ${style.BannerImage}
          ${style.BannerSection}
        `}
      >
        <h1 className="title">{title}</h1>
        <p className="subtitle">{intro}</p>
        <div
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Section>
    </header>
  )
}

export default UfilerespBanner
