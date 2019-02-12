import React from 'react'
import Layout from '../../components/Layout'
import Navbar from './sections/survey/Navbar'
import Footer from './sections/survey/Footer'

const SmartsaverLayout = ({ children }) => {
  return (
    <Layout className="SmartsaverLayout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default SmartsaverLayout
