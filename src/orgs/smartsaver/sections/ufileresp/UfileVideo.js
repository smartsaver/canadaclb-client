import React from 'react'
import Section from './Section'
import YoutubeVideoFrame from '../../../../components/YoutubeVideoFrame'
import style from './UfileVideo.module.css'

const UfileVideo = ({ url }) => {
  return (
    <Section className="has-text-centered">
      <YoutubeVideoFrame className={style.UfileVideoFrame} url={url} />
    </Section>
  )
}

export default UfileVideo
