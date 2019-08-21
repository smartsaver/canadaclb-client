import React from 'react'
import { Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Layout from '../Layout'
import Section from '../../components/Section'
import withRoot from '../../../theme/withRoot'

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
  },
})

function IndexPage() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Section>
          <Typography variant="h1">Hello World</Typography>
        </Section>
      </Layout>
    </MuiThemeProvider>
  )
}

export default withRoot(IndexPage)
