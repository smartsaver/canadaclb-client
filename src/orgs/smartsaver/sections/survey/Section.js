import React from 'react'
import Section from '../../../../components/Section'
import './Section.css'

const SmartsaverSection = ({ children, name = '', className = '' }) => {
  return (
    <Section name={name} className={`SmartsaverSection ${className}`}>
      {children}
    </Section>
  )
}

export default SmartsaverSection
