import React from 'react'
import Section from '../../components/Section'
import style from './Banner.module.css'

/**
 * @function CanadaclbBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const CanadaclbBanner = props => {
  const { title } = props.content
  return (
    <header>
      <Section
        className={`
          section 
          ${style.BannerImage}
          ${style.BannerSection}
        `}
      >
        <div
          className={`
            content
            ${style.Content}
          `}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Section>
    </header>
  )
}

export default CanadaclbBanner
