import React, { Fragment } from 'react'
import BannerSection from './BannerSection'
import VideoSection from './VideoSection'
import contentList from './content'
import ApplySection from './ApplySection'
import YWCASurveySection from './YWCASurveySection'

const { videoSectionContent } = contentList

function HomePage() {
  return (
    <Fragment>
      <BannerSection content={contentList.bannerContent} />
      <VideoSection
        content={contentList.videoSectionContent}
        url={videoSectionContent.embedUrl}
      />
      <YWCASurveySection url="https://www.surveymonkey.com/r/2JPD69D" />
      <ApplySection content={contentList.applySectionContent} />
    </Fragment>
  )
}

export default HomePage
