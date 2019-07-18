import React from 'react'
import { render } from '@testing-library/react'
import EfryPage from '../efry/IndexPage'
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

describe('Efry page', () => {
  it('index page works', () => {
    render(<EfryPage />)
  })
})
