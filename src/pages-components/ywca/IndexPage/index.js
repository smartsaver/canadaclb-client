import React, { Fragment } from 'react'
import BannerSection from './BannerSection'
import VideoSection from './VideoSection'
import contentList from './content'
import ApplySection from './ApplySection'
import YWCASurveySection from './YWCASurveySection'
import SEO from '../../../bulma-components/Seo'

const { videoSectionContent } = contentList

function HomePage() {
  return (
    <Fragment>
      <SEO title="YWCA" />
      <BannerSection content={contentList.bannerContent} />
      <VideoSection
        content={contentList.videoSectionContent}
        url={videoSectionContent.embedUrl}
      />
      <div id="apply">
        <YWCASurveySection
          content={contentList.ywcaSurveySectionContent}
          url="https://www.surveymonkey.com/r/2JPD69D"
        />
        <ApplySection content={contentList.applySectionContent} />
      </div>
    </Fragment>
  )
}

export default HomePage
