import React from 'react'
import Layout from '../Layout'
import SEO from '../../components/SEO'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import withRoot from '../../../theme/withRoot'
import Banner from './Banner'
import Promotion from './Promotion'
import Apply from './Apply'
import Contact from './Contact'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h2: {
      fontSize: 32,
      fontWeight: 400,
    },
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
        <SEO title="Efry" lang="en">
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          ></script>
        </SEO>
        <main>
          <Banner />
          <Promotion />
          <Apply />
          <Contact />
        </main>
      </Layout>
    </MuiThemeProvider>
  )
}

export default withRoot(EfryPage)
