import React from 'react'
import Section from '../../../../components/Section'
import style from './Banner.module.css'

/**
 * @function UfilerespBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const UfilerespBanner = props => {
  const { content } = props.content
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
          className="title is-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Section>
    </header>
  )
}

export default UfilerespBanner
