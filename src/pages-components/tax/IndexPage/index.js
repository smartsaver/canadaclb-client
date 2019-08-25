import React, { useState } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
// import SEO from '../../components/SEO'
import Layout from '../Layout'
import withRoot from '../../../theme/withRoot'
import Banner from './Banner'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 60,
      fontWeight: 300,
    },
    h2: {
      fontSize: 32,
      fontWeight: 400,
    },
    body1: {
      fontSize: 18,
    },
  },
})

function IndexPage() {
  const [locale] = useState('en')
  return (
    <MuiThemeProvider theme={theme}>
      {/* <SEO lang={locale} title="Tax Sticky" /> */}
      <Layout>
        <Banner locale={locale} />
      </Layout>
    </MuiThemeProvider>
  )
}

export default withRoot(IndexPage)
