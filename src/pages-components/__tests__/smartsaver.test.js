import React from 'react'
import { render } from 'react-testing-library'
import { StaticQuery } from 'gatsby'
import SurveyPage from '../smartsaver/survey'
import UfileRespPage from '../smartsaver/ufileresp'

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
