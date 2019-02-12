import React from 'react'
import Footer from '../../../../components/Footer'
import './Footer.css'
import footerContent from '../../content/survey/footerContent'

const SmartsaverFooter = () => {
  const { image, intro, otherLinks, footer, contact } = footerContent
  return (
    <Footer name="contact" className="Footer--Smartsaver-theme">
      <div className="columns">
        <div className="column is-half">
          <img src={image} alt="SmartSAVER" />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          <div
            className="title is-6 is-marginless"
            dangerouslySetInnerHTML={{ __html: otherLinks }}
          />
          <div
            className="content is-marginless"
            dangerouslySetInnerHTML={{ __html: footer }}
          />
        </div>
        <div className="column is-half">
          <div>
            <h3 className="title is-3">Contact Us</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: contact }}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default SmartsaverFooter
