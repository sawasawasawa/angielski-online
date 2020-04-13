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
            <h1>O mnie</h1>
          </header>

          <p id="content">Szukasz dobrego nauczyciela języka angielskiego? Udało się! Jestem dobrym nauczycielem.<br/>
            Można czasem usłyszeć, że jeszcze nikt nikogo niczego nie nauczył - każdy wszystkiego musi nauczyć sią sam.
            Ja jednak potrafię wskazać efektywną ścieżkę nauki i z sukcesem pomóc Ci w Twojej własnej nauce.</p>

          <p>
            Moje doświadczenie to:<br/>
            <ul>
              <li>
            nauczanie angielskiego – w Instytucie Anglistyki UMCS, w szkołach prywatnych i państwowych.
            Prowadziłem też stacjonarną szkołę językową. Niektórzy z jej uczniów zostali lektorami, inni zdawali na wysokim poziomie egzaminy TELC i Cambridge
              </li>
              <li>
                praca metodyka nauczania języka angielskiego – doradzałem nauczycielom jak uczyć i szkoliłem przyszłych nauczycieli
              </li>
              <li>
                praca w międzynarodowych wydawnictwach zajmujących się materiałami do nauki języka angielskiego
              </li>
            </ul>
            W wydawnictwach Pearson i Cambridge pracowałem w czasach, gdy płyty CD dołączane do podręczników i słowników były szczytem nowoczesności. Świat nie stoi jednak w miejscu. Teraz w laptopie, tablecie a nawet w smartfonie mieści się komplet materiałów potrzebnych nauki. Każdy przeglądał je wielokrotnie. Jeśli jednak tu jesteś - to znaczy, że już wiesz, że potrzebna Ci moja pomoc.
          </p>
        </div>
      </section>

    </div>

  </Layout>
)

export default Elements
