import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from '../../../test-config/__mocks__/gatsby'
import SurveyPage from '../smartsaver/survey'
import UfileRespPage from '../smartsaver/ufileresp'
import NWTPage from '../../pages/smartsaver/nwt'

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

describe('/smartsaver/survey page', () => {
  it('works', () => {
    render(<SurveyPage />)
  })
})

describe('/smartsaver/ufileresp page', () => {
  it('works', () => {
    render(<UfileRespPage />)
  })
})

describe('/smartsaver/nwt page', () => {
  it('works', () => {
    render(<NWTPage />)
  })
})
