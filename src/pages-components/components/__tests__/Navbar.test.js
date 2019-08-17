import React from 'react'
import Navbar from '../Navbar'
import { render } from '@testing-library/react'

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
})
