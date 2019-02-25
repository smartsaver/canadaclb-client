import React from 'react'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import brandLogo from '../../images/smartsaver/smartsaver-logo-small.png'
import './SmartsaverNavbar.css'

/**
 * @function SmartsaverNavbar - custom themed blue navbar with smartsaver logo.
 * @param {Object} navbarEnd - any react element. will go to the right side of the navbar
 * @param {Object} [navbarBrand = defaultNavbarBrand] - any react element, will go the leftmost. Has a default value of smartsaver logo.
 */

const defaultNavbarBrand = (
  <NavbarItem text={<img src={brandLogo} alt="SmartSAVER" />} href="#" />
)

const SmartsaverNavbar = ({
  navbarBrand = defaultNavbarBrand,
  navbarEnd = null,
}) => {
  return (
    <Navbar
      className="SmartsaverNavbar Navbar--Smartsaver-theme is-dark"
      navbarBrand={navbarBrand}
      navbarEnd={navbarEnd}
    />
  )
}

export default SmartsaverNavbar
