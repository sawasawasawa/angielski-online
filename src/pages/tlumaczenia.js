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
          <p>
  </p>
        </div>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Tłumaczymy:</h2>
          </header>
          <p><li>pisemnie i ustnie</li>
              <li>tłumaczenia zwykłe i przysięgłe</li>
              <li>strony www</li>
              <li>teksty specjalistyczne</li>
              <li>dokumenty firmowe</li>
              <li>prezentacje</li>
              <li>lokalizacja oprogramowania</li>
              <li>listy, emaile</li>
              <li>inne ...</li> </p>
  <p>
              Tłumaczenia pisemne: prosimy o kontakt telefoniczny lub mailowy w celu wyceny. Po przesłaniu tekstu do tłumaczenia 
              przeliczymy znaki na stronę przeliczeniową i prześlemy wycenę do akceptacji.<br/></p>
  <p>
              Tłumaczenia ustne: prosimy o kontakt w celu uzgodnienia zakresu tłumaczenia, miejsca, terminu. Na tej podstawie uzgodnimy 
              wycenę.

  </p>
        </div>
      </section>

    </div>

  </Layout>
)

export default Landing
