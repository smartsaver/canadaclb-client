import React, { Fragment } from 'react'
import logo from '../../../images/ywca/ywca-logo.png'
import Navbar from '../components/Navbar/index'
import NavbarBrand from '../components/Navbar/NavbarBrand'
import Footer from '../components/Footer/index'
import withStyles from '@material-ui/core/styles/withStyles'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import DangerNotification from '../../components/Notification/NotificationDanger'
import ContentMarkdown from '../../components/Content/ContentMarkdown'

const styles = () => ({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
    'section:nth-child(odd)': {
      backgroundColor: grey[100],
    },
  },
  dangerNotification: {
    width: '100%',
  },
  dangerNotificationText: {
    color: red[900],
    '& a': {
      color: red[800],
      textDecoration: 'underline',
      fontWeight: 700,
    },
  },
  positionFixedHolder: {
    width: '100%',
    position: 'fixed',
  },
  navbar: {
    position: 'static',
  },
})

function Layout({ children, classes }) {
  const _DangerNotification = () => {
    return (
      <div className={classes.dangerNotification}>
        <DangerNotification>
          <ContentMarkdown
            className={classes.dangerNotificationText}
            text={`
  Thank you for your interest in the YWCA Accelerator program. This program is now closed. For more information on how to open a no-cost RESP and apply for the Canada Learning Bond, please visit MySmartFUTURE.org. Questions? Please email info@smartsaver.org.
  
  Merci de votre intérêt pour Programme d'accélérateur YWCA. L'inscription à ce programme est maintenant terminée. Pour savoir comment ouvrir un REEE sans frais et demander le Bon d'études canadien, visitez le site: https://moneducavenir.org. Des questions? Écrivez nous! info@smartsaver.org.
          `}
          />
        </DangerNotification>
      </div>
    )
  }

  return (
    <Fragment>
      <div className={classes.positionFixedHolder}>
        <_DangerNotification />
        <Navbar
          appBarClassName={classes.navbar}
          brand={<NavbarBrand logo={logo} alt="YWCA" />}
        />
      </div>

      {children}
      <Footer />
    </Fragment>
  )
}

export default withStyles(styles)(Layout)
