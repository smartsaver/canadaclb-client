import React from 'react'
import Footer from '../../../components/Footer'
import style from './FooterSection.module.css'

const FooterSection = props => {
  const { content, ufileUrl, logo } = props.content
  return (
    <Footer className={style.Footer}>
      <div
        className={`
          ${style.Container}
          ${style.Center}
        `}
      >
        <a
          href={ufileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${style.UfileContainer}
            ${style.Container}
          `}
        >
          <img
            src={logo}
            alt="Ufile"
            className={`
              image
              ${style.UfileLogo}
            `}
          />
        </a>
        <div
          className="title is-5 has-text-centered"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Footer>
  )
}

export default FooterSection
