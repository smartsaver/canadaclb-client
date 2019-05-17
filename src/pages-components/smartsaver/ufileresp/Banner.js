import React from 'react'
import Section from '../../../bulma-components/Section'
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
        <h1 className="title is-3">{title}</h1>
        <p className="subtitle is-4">{intro}</p>
        <p
          className="subtitle is-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Section>
    </header>
  )
}

export default UfilerespBanner
