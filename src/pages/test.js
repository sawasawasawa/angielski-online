import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import SEO from '../components/SEO'

const Elements = (props) => (
  <Layout>
    <SEO/>

    <div id="main" className="alt">

      <section id="one">
        <div className="inner">
          <header className="major">
            <h1 style={{maxWidth: "100%"}}>Test sprawdzający znajomość języka angielskiego</h1>
          </header>

          <h2 id="content">W przygotowaniu...</h2>
          <p>Zostaw maila za pomocą formularza poniżej, a poinformuję Cię, gdy test będzie gotowy :)</p>
          <p>Już niebawem!</p>

        </div>
      </section>

    </div>

  </Layout>
)

export default Elements
