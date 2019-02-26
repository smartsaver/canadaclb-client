import React from 'react'
import Section from '../../components/Section'
import Content from '../../components/Content'
import style from './Banner.module.css'
import theme from '../smartsaver/css-theme/Theme.module.css'

/**
 * @function CanadaclbBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const CanadaclbBanner = props => {
  const { title } = props.content
  return (
    <header>
      <div
        className={`
          section 
          ${style.BannerImage}
          ${style.BannerImageSection}
        `}
      />
      <Section
        className={`
          ${style.BannerTitle}
          ${theme.Background__primary}
        `}
      >
        <Content html={title} />
      </Section>
    </header>
  )
}

export default CanadaclbBanner
