import React from 'react'
import Navbar from '../../../components/Navbar'
import NavbarItem from '../../../components/Navbar/NavbarItem'
import brandLogo from '../images/logo-small.png'
import './Navbar.css'

const SmartsaverNavbar = () => {
  return (
    <Navbar
      className="SmartsaverNavbar Navbar--Smartsaver-theme is-dark"
      navbarBrand={
        <NavbarItem text={<img src={brandLogo} alt="SmartSAVER" />} />
      }
      navbarEnd={<NavbarItem text="Hello" href="#" />}
    />
  )
}

export default SmartsaverNavbar
