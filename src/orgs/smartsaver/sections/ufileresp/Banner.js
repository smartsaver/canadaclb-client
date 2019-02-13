import React from 'react'
import Section from '../../../../components/Section'
import style from './Banner.module.css'

/**
 * @function UfilerespBanner - Banner component
 * @param content {Object} - contains object of contents
 */

const UfilerespBanner = props => {
  const { intro, title, content, videoUrl } = props.content
  const VideoFrame = () => {
    if (!videoUrl) return null
    return (
      <iframe
        title="Youtube Video"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    )
  }
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
        <div>
          <VideoFrame />
        </div>
      </Section>
    </header>
  )
}

export default UfilerespBanner
