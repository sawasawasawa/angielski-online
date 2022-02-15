import React, { createRef, useState } from 'react'

const config = {
//    cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
    formUrl:  "https://docs.google.com/forms/u/5/d/e/1FAIpQLSduVqFp2IsSmYhL_ZfQnzDDcX7F1Q8uHZZxaB4vEn7yX18Xow/formResponse"
};

const Contact = (props) => {
    const [submitResult, setSubmitResult] = useState();

    const formRef = createRef();

    const doSubmit = async function(e) {
        e.preventDefault();

        if (formRef.current) {
            try {
                const formData = new FormData(formRef.current);
                const response = await fetch(
                  `${config.cors}${config.formUrl}`,
                  {
                      method: 'post',
                      body: formData
                  }
                );
                if (response && response.status === 200) {
                    setSubmitResult("SUCCESS");
                }
            } catch (error) {
                setSubmitResult("ERROR");
            }
        }
    };

    return (
      <section id="contact">
          <div className="inner">
              <section>
                  {submitResult === "ERROR" && (
                    <h4
                      // style={{ color: colors.AlertRed, maxWidth: "100%" }}
                    >
                        Oops, something went wrong. Please try again.
                    </h4>
                  )}
                  {submitResult === "SUCCESS" ? (
                    <h4 style={{ maxWidth: "100%" }}>
                        Thanks for the message. We’ll be in touch shortly.
                    </h4>
                  ) : (
                    <form ref={formRef} onSubmit={doSubmit}>
                        <h3>Masz pytania? Napisz do mnie!</h3>
                        <div className="field half first">
                            <label htmlFor="name">Imię</label>
                            <input type="text" name="entry.1377344988" id="name" required/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="entry.1174481608" id="email" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Wiadomość</label>
                            <textarea name="entry.921174831" id="message" rows="6"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Wyślij" className="special"/></li>
                            <li><input type="reset" value="Wyczyść"/></li>
                        </ul>
                    </form>
                  )}
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
              </section>
          </div>
      </section>
    )
}

export default Contact
