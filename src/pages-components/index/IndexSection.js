import React from 'react'
import Section from '../../components/Section'
import style from './IndexSection.module.css'

const IndexSection = ({ children, name = '', className = '' }) => {
  return (
    <Section name={name} className={`${style.Container} ${className}`}>
      {children}
    </Section>
  )
}

export default IndexSection
