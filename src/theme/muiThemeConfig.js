import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 50,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
})

export default theme
