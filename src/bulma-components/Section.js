import React from 'react'
import style from './Section.module.css'

const Section = ({ children, className = '', name = '' }) => {
  return (
    <section
      id={name}
      className={`${style.Section} Section section ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
