import React from 'react'
import SmartsaverFooter from '../smartsaver/SmartsaverFooter'
import Content from '../../components/Content'
import style from './IndexFooter.module.css'

const IndexFooter = props => {
  const { image, intro, otherLinks, footer, contact } = props.content
  return (
    <SmartsaverFooter>
      <div className="columns">
        <div className={`column is-half ${style.ContactSection}`}>
          <h2 className="title">Contact Us</h2>
          <Content html={contact} />
        </div>
        <div className={`column is-half ${style.LogoSection}`}>
          <img src={image} alt="SmartSAVER" />
          <Content html={intro} />
          <Content html={footer} />
          <Content html={otherLinks} />
        </div>
      </div>
    </SmartsaverFooter>
  )
}

export default IndexFooter
