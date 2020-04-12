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
                Podaj teraz swój adres email i kliknij przycisk 'Zacznij test' by rozpocząć test.
              </p>

              <form onSubmit={() => setShowForm(true)}>
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
