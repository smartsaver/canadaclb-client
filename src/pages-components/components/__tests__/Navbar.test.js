import React from 'react'
import Navbar from '../Navbar'
import NavbarDrawer from '../Navbar/NavbarDrawer'
import { ListItem } from '@material-ui/core'
import { render, fireEvent } from '@testing-library/react'

describe('Navbar', () => {
  test('Navbar Without Drawer renders with brand, menu, and burger bar', () => {
    const [brandText, menuText, burgerBar] = [
      'fakebrandText',
      'fakemenuText',
      'Menu',
    ]
    const { getByText, getByLabelText } = render(
      <Navbar brand={brandText} menuEnd={menuText} />
    )

    expect(getByText(brandText))
    expect(getByText(menuText))
    expect(getByLabelText(burgerBar))
  })

  test('Navbar + Navbar Drawer appears on burger click', async () => {
    const [brandText, menuText, drawerText, burgerBar] = [
      'fakebrandText',
      'fakemenuText',
      'navbarDrawerText',
      'Menu',
    ]
    const { getByLabelText, getByText } = render(
      <Navbar
        brand={brandText}
        menuEnd={menuText}
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            <ListItem>{drawerText}</ListItem>
          </NavbarDrawer>
        )}
      />
    )

    fireEvent.click(getByLabelText(burgerBar))
    expect(getByText(drawerText))
  })
})
