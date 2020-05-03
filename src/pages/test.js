import React, { useState } from 'react'
import Layout from '../components/layout'

import SEO from '../components/SEO'
import EmbeddedTest from '../components/EmbeddedTest'

const Elements = (props) => {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')

  return (<Layout noFooter={showForm}>
      <SEO/>
    {
      showForm
       ? <div id="main" className="alt">
          <EmbeddedTest email={email}/>
      </div>
       :
        <div id="main" className="alt">

          <section id="one">
            <div className="inner">
              <header className="major">
                <h1 style={{ maxWidth: '100%' }}>Test sprawdzający znajomość języka angielskiego</h1>
              </header>

              <p>INSTRUKCJA</p>

              <p></p>

              <p>
                Sprawdź swój poziom znajomości angielskiego. Do napisania testu potrzebujesz nie więcej niż 60 minut,
                ale być może zajmie Ci to mniej czasu. <br/>
                Test składa sie ze 100 zdań, które należy uzupełnić odpowiednim słowem lub zwrotem.
                W każdym zadaniu poprawna jest tylko jedna odpowiedź. Postaraj się odpowiedzieć na jak najwięcej pytań.<br/><br/>
                Podaj swój adres email - na ten adres wyślemy Ci wynik testu.<br/>
                Jesteś gotowy? Kliknij przycisk 'Zacznij test' aby rozpocząć.<br/>
                Powodzenia!<br/><br/></p>
                <p style="font-size:6px">© 2020, Rajmund Sawka. Licensed under the Creative Commons Attribution Noncommercial 4.0 International License, CC BY NC. 
                To view a copy of this license, visit: https://creativecommons.org/licenses/by-nc/4.0/
              </p>

              <form onSubmit={(e) => {
                e.preventDefault()
                setShowForm(true)
              }}>
                <div className="field">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" required style={{maxWidth: 400}} value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <ul className="actions">
                  <li style={{maxWidth: 400, width: '100%'}}><input type="submit" value="Zacznij test" className="special" style={{maxWidth: 400, width: '100%'}}/></li>
                </ul>
              </form>

            </div>
          </section>

        </div>
    }
    </Layout>
  )
}

export default Elements
