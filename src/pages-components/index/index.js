import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../smartsaver/SmartsaverNavbar'
import Footer from '../smartsaver/SmartsaverFooter'

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <h1>Hello World</h1>
      </main>
      <h2>Smartsaver footer</h2>
      <Footer />
    </Layout>
  )
}

export default IndexPage
