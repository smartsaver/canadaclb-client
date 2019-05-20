import React from 'react'
import withRoot from '../../theme/withRoot'
import IndexPage from './IndexPage'
import Layout from './Layout'

function YWCAPage() {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  )
}

export default withRoot(YWCAPage)
