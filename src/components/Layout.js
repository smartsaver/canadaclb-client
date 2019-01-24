import React from 'react'
import 'bulma/css/bulma.css'

const Layout = ({ children, className = '' }) => {
  return <div className={`Layout ${className}`}>{children}</div>
}

export default Layout
