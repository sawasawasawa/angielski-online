import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = (props) => {
    const [state, handleSubmit] = useForm("xkneprbq");

    return (
      <section id="contact">
          <div className="inner">
              {state.succeeded ? <section><h1>Dziękuję za wiadomość!</h1>
                  <p>Odpowiem niebawem :)</p></section> : <>
                  <section>
                      <form onSubmit={handleSubmit}>
                          <h3>Masz pytania? Napisz do mnie!</h3>
                          <div className="field half first">
                              <label htmlFor="name">Imię</label>
                              <input type="text" name="name" id="name" required/>
                              {/*<ValidationError*/}
                              {/*  prefix="Name"*/}
                              {/*  field="name"*/}
                              {/*  errors={state.errors}*/}
                              {/*/>*/}
                          </div>
                          <div className="field half">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="email" required/>
                              {/*<ValidationError*/}
                              {/*  prefix="Email"*/}
                              {/*  field="email"*/}
                              {/*  errors={state.errors}*/}
                              {/*/>*/}
                          </div>
                          <div className="field">
                              <label htmlFor="message">Wiadomość</label>
                              <textarea name="message" id="message" rows="6"></textarea>
                              {/*<ValidationError*/}
                              {/*  prefix="Message"*/}
                              {/*  field="message"*/}
                              {/*  errors={state.errors}*/}
                              {/*/>*/}
                          </div>
                          <ul className="actions">
                              <li><input type="submit" value="Wyślij" className="special"/></li>
                              <li><input type="reset" value="Wyczyść"/></li>
                          </ul>
                      </form>
                  </section>
                  <section className="split">
                      <section>
                          <div className="contact-method">
                              <span className="icon alt fa-envelope"></span>
                              <h3>Email</h3>
                              <a href="mailto:ray.sawka@gmail.com">ray.sawka@gmail.com</a>
                          </div>
                      </section>
                      <section>
                          <div className="contact-method">
                              <span className="icon alt fa-phone"></span>
                              <h3>Telefon</h3>
                              <a href="phone:+48 602 346 597">+48 602 346 597</a>
                          </div>
                      </section>
                      {/*<section>*/}
                      {/*    <div className="contact-method">*/}
                      {/*        <span className="icon alt fa-home"></span>*/}
                      {/*        <h3>Address</h3>*/}
                      {/*        <span>1234 Somewhere Road #5432<br/>*/}
                      {/*          Nashville, TN 00000<br/>*/}
                      {/*          United States of America</span>*/}
                      {/*    </div>*/}
                      {/*</section>*/}
                  </section></>}

          </div>
      </section>
    )
}

export default Contact
