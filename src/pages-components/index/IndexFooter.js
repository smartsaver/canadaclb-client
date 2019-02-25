import React from 'react'
import SmartsaverFooter from '../smartsaver/SmartsaverFooter'
import Content from '../../components/Content'

const IndexFooter = props => {
  const { image, intro, otherLinks, footer, contact } = props.content
  return (
    <SmartsaverFooter>
      <div className="columns">
        <div className="column is-half">
          <img src={image} alt="SmartSAVER" />
          <Content html={intro} />
          <Content html={footer} />
          <Content html={otherLinks} />
        </div>
        <div className="column is-half">
          <h2 className="title">Contact Us</h2>
          <Content html={contact} />
        </div>
      </div>
    </SmartsaverFooter>
  )
}

export default IndexFooter
