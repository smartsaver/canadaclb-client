import React, { Component } from 'react'
import Burger from './Burger'

const Navbar = ({ isActive, onBurgerClick, navbarEnd, navbarBrand }) => {
  const isMenuActive = isActive ? 'is-active' : ''
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {navbarBrand}
          <Burger isActive={isActive} onBurgerClick={onBurgerClick} />
        </div>
        <div className={`navbar-menu ${isMenuActive} js-navbar-menu`}>
          <div className="navbar-end">{navbarEnd}</div>
        </div>
      </div>
    </nav>
  )
}

class NavbarContainer extends Component {
  state = {
    isActive: false,
  }

  componentDidMount = () => {
    this.closeMenu()
  }

  closeMenu = () => {
    /* eslint-disable no-undef */
    // close the menu when something's clicked
    const navbarMenu = document.querySelector('.js-navbar-menu')
    navbarMenu.addEventListener('click', event => {
      if (event.target.classList.contains('navbar-item') === true)
        this.setState(() => ({ isActive: false }))
    })
  }

  handleOnBurgerClick = event => {
    // disable the default event
    event.preventDefault()
    this.toggleIsActive()
  }

  toggleIsActive = () => {
    // update the state
    this.setState(currentState => {
      return {
        isActive: !currentState.isActive,
      }
    })
  }

  render() {
    const { navbarEnd = null, navbarBrand = null } = this.props
    return (
      <header>
        <Navbar
          isActive={this.state.isActive}
          onBurgerClick={this.handleOnBurgerClick}
          navbarEnd={navbarEnd}
          navbarBrand={navbarBrand}
        />
      </header>
    )
  }
}

export default NavbarContainer
