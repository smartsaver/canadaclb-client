import React, { Fragment } from 'react'
import BannerSection from './BannerSection'
import VideoSection from './VideoSection'
import contentList from './content'
import ApplySection from './ApplySection'

const { videoSectionContent } = contentList

function HomePage() {
  return (
    <Fragment>
      <BannerSection />
      <VideoSection
        content={contentList.videoSectionContent}
        url={videoSectionContent.embedUrl}
      />
      <ApplySection content={contentList.applySectionContent} />
    </Fragment>
  )
}

export default HomePage
