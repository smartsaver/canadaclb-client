import React from 'react'
import Section from './Section'
import YoutubeVideoFrame from '../../../components/YoutubeVideoFrame'
import style from './UfileVideo.module.css'

const UfileVideo = props => {
  const { content } = props.content
  return (
    <Section className="has-text-centered">
      <div
        className={`
          content
          ${style.Content}
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <YoutubeVideoFrame className={style.UfileVideoFrame} url={props.url} />
    </Section>
  )
}

export default UfileVideo
