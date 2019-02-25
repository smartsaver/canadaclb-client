import React from 'react'
import Section from '../../components/Section'
import style from './Banner.module.css'
import theme from '../smartsaver/css-theme/Theme.module.css'

/**
 * @function CanadaclbBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const CanadaclbBanner = props => {
  const { title, content } = props.content
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
            ${style.BannerTitle}
          `}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Section>
      <Section
        className={`
          ${theme.Background__light}
        `}
      >
        <div
          className={`
            content
            ${style.BannerContent}
          `}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Section>
    </header>
  )
}

export default CanadaclbBanner
