import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import SEO from '../components/SEO'
import BookLesson from '../components/BookLesson'

const Elements = (props) => (
  <Layout noFooterForm>
    <SEO/>

    <div id="main" className="alt">

      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Lekcja próbna</h1>
          </header>
          <p>
            Wypełnij poniższy formularz - skontaktuję się z Tobą i umówimy sie na próbną lekcję.
          </p>

          <section>
            <BookLesson/>
          </section>

        </div>
      </section>

    </div>

  </Layout>
)

export default Elements
