import React, { Fragment } from 'react'
import BannerSection from './BannerSection'
import VideoSection from './VideoSection'
import contentList from './content'

const { videoSectionContent } = contentList

function HomePage() {
  return (
    <Fragment>
      <BannerSection />
      <VideoSection
        content={contentList.videoSectionContent}
        url={videoSectionContent.embedUrl}
      />
    </Fragment>
  )
}

export default HomePage
