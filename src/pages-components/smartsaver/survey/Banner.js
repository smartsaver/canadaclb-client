import React from 'react'
import Section from './Section'
import logo from '../../../images/smartsaver/maeghan-david-banner.jpg'
import style from './Banner.module.css'
import { introContent } from './content/introContent'

const Banner = () => {
  return (
    <Section className="Section--Smartsaver-theme">
      <div className="columns">
        <div
          className="content column is-two-thirds"
          dangerouslySetInnerHTML={{ __html: introContent.intro }}
        />
        <div className={`column is-one-third ${style.LogoContainer}`}>
          <img src={logo} alt="Meaghan and David" className="image" />
        </div>
      </div>
    </Section>
  )
}

export default Banner
