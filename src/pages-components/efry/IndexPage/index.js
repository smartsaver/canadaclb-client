import React from 'react'
import Layout from '../Layout'
import SEO from '../../components/SEO'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import withRoot from '../../../theme/withRoot'
import Banner from './Banner'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#F9E183',
      main: '#E0BE38',
      dark: '#C49D04',
    },
    secondary: {
      light: '#5D7AA4',
      main: '#2F5894',
      dark: '#0E3C81',
    },
  },
})

function EfryPage() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <SEO title="Efry" />
        <main>
          <Banner />
        </main>
      </Layout>
    </MuiThemeProvider>
  )
}

export default withRoot(EfryPage)
