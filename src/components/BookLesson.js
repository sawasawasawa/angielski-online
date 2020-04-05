import React, { createRef, useState } from 'react'

const config = {
    cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
    formUrl: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSfQHQc0T8EHkvtTaKpUBvhfYWFbKexBiPLQGZ2Ac35M1SwflQ/formResponse"
};

const BookLesson = (props) => {
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
                        Ups... coś poszło nie tak. Spróbuj jeszcze raz.
                    </h4>
                  )}
                  {submitResult === "SUCCESS" ? (
                    <h4 style={{ maxWidth: "100%" }}>
                        Poszło! Skontaktuję się z Tobą niebawem :)
                    </h4>
                  ) : (
                    <form ref={formRef} onSubmit={doSubmit}>
                        <h3>Masz pytania? Napisz do mnie!</h3>
                        <div className="field half first">
                            <label htmlFor="name">Imię</label>
                            <input type="text" name="entry.1266475115" id="name" required/>
                        </div>
                        <div className="field half">
                            <label htmlFor="surname">Nazwisko</label>
                            <input type="text" name="entry.1440471695" id="surname" required/>
                        </div>
                        <div className="field half first">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="entry.899568842" id="email" required/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Telefon</label>
                            <input type="text" name="entry.803941003" id="email" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Wiadomość (opcjonalnie)</label>
                            <textarea name="entry.1249253311" id="message" rows="6"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Wyślij" className="special"/></li>
                            <li><input type="reset" value="Wyczyść"/></li>
                        </ul>
                    </form>
                  )}
              </section>
          </div>
      </section>
    )
}

export default BookLesson
