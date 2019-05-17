import React from 'react'
import Section from '../../bulma-components/Section'
import theme from './css-themes/Theme.module.css'

const SmartsaverSection = ({ children, name = '', className = '' }) => {
  return (
    <Section name={name} className={`${className} ${theme.Primary}`}>
      {children}
    </Section>
  )
}

export default SmartsaverSection
