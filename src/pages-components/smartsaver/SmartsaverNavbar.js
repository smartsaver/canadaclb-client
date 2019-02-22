import React from 'react'
import Navbar from '../../components/Navbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import brandLogo from '../../images/smartsaver/smartsaver-logo-small.png'
import './SmartsaverNavbar.css'

/**
 * @function SmartsaverNavbar - custom themed blue navbar with smartsaver logo.
 * @param {Objeccy} navbarEnd - any react element. will go to the right side of the navbar
 */

const SmartsaverNavbar = ({ navbarEnd = null }) => {
  return (
    <Navbar
      className="SmartsaverNavbar Navbar--Smartsaver-theme is-dark"
      navbarBrand={
        <NavbarItem text={<img src={brandLogo} alt="SmartSAVER" />} href="#" />
      }
      navbarEnd={navbarEnd}
    />
  )
}

export default SmartsaverNavbar
