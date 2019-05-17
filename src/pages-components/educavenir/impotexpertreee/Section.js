import React from 'react'
import Section from '../../../bulma-components/Section'
import './Section.css'

const ImpotexpertSection = ({ children, className = '', name = '' }) => {
  return (
    <Section name={name} className={`ImpotexpertSection ${className}`}>
      {children}
    </Section>
  )
}

export default ImpotexpertSection
