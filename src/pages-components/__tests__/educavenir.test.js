import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from '../../../test-config/__mocks__/gatsby'
import ImpotExpertPage from '../educavenir/impotexpertreee'

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

describe('/educavenir/impotexpertreee page', () => {
  it('works', () => {
    render(<ImpotExpertPage />)
  })
})
