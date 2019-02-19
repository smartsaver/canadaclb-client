import React from 'react'

const NavbarItem = ({ text, href, isLinkWillOpenInNewWindow = false }) => {
  const linkTagOptions = !isLinkWillOpenInNewWindow
    ? {}
    : {
        target: '_blank',
        rel: 'noopenner noreferrer',
      }
  return (
    <a href={href} className="navbar-item" {...linkTagOptions}>
      {text}
    </a>
  )
}

export default NavbarItem
