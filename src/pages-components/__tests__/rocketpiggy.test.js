import React from 'react'
import { render } from '@testing-library/react'
import RocketPiggyPage from '../rocketpiggy'
import { StaticQuery } from '../../../test-config/__mocks__/gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'title',
          description: 'description',
          author: 'author',
        },
      },
    })
  )
})

describe('index page', () => {
  it('works', () => {
    render(<RocketPiggyPage />)
  })
})
