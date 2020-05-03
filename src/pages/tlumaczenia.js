import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const Landing = (props) => (
  <Layout>
    <SEO />

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Tłumaczenia</h1>
        </header>
        <div className="content">
          <p>Oferta w przygotowaniu :)</p>
        </div>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Masz pytania?</h2>
          </header>
          <p>Napisz do mnie!</p>
        </div>
      </section>

    </div>

  </Layout>
)

export default Landing
