import React from 'react'
import Section from '../../../../components/Section'
import './Section.css'

const UfilerespSection = ({ children, className = '', name = '' }) => {
  return (
    <Section name={name} className={`UfilerespSection ${className}`}>
      {children}
    </Section>
  )
}

export default UfilerespSection
