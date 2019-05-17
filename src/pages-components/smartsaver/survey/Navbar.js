import React, { Fragment } from 'react'
import Navbar from '../../../bulma-components/Navbar'
import NavbarItem from '../../../bulma-components/Navbar/NavbarItem'
import NavbarDropdown from '../../../bulma-components/Navbar/NavbarDropdown'
import brandLogo from '../../../images/smartsaver/smartsaver-logo-small.png'
import './Navbar.css'

const SmartsaverNavbar = () => {
  return (
    <Navbar
      className="SmartsaverNavbar Navbar--Smartsaver-theme is-dark"
      navbarBrand={
        <NavbarItem text={<img src={brandLogo} alt="SmartSAVER" />} href="#" />
      }
      navbarEnd={
        <Fragment>
          <NavbarDropdown text="Survey">
            <NavbarItem text="Terms of Agreement" href="#terms-of-agreement" />
            <NavbarItem text="Complete the Survey" href="#survey" />
            <NavbarItem text="Enter Email" href="#email" />
          </NavbarDropdown>
          <NavbarItem text="Contact" href="#contact" />
        </Fragment>
      }
    />
  )
}

export default SmartsaverNavbar
