import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import learningAtHome from '../assets/images/Learning_at_home.png'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import SEO from '../components/SEO'

const Landing = (props) => (
    <Layout>
       <SEO/>

        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Kursy języka angielskiego online</h1>
                </header>
                {/*<div className="content">*/}
                {/*    <p>Lorem ipsum dolor sit amet nullam consequat<br />*/}
                {/*        sed veroeros. tempus adipiscing nulla.</p>*/}
                {/*</div>*/}
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Wybierz kurs dla siebie</h2>
                    </header>
                    <p>Wkrótce wstawię tutaj więcej informacji. A teraz możesz napisać do mnie i powiedzieć mi czego potrzebujesz w nauce angielskiego. Ja Ci odpowiem, w jaki sposób mogę Ci pomóc.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={learningAtHome} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski ogólny</h3>
                            </header>
                            <p>Miliony zwykłych ludzi zna obce języki. Jednak wielu innych myśli, że nie są w stanie się ich nauczyć. 
                                Mówią więc:</br>
                            <ul>
                            <li>Nigdy nie miałem okazji nauczyć się obcego języka, a teraz jestem za stary.</li>
                                Nie! Nigdy nie jest się za starym na naukę.
                            <li>Nauczenie się wszystkich słów i gramatyki zabrałoby mi całe lata</li>
                                Nie musisz nauczyć się całego języka - możesz zacząć się posługiwać językiem przy bardzo małej jego 
                                znajomości, ucząc się go po trochu.
                             <li>Gdy robię wiele błędów, czuję się zażenowany</li>
                                Nie musisz. Robienie błędów jest częścią procesu nauki języka I inni to zrozumieją, więc nie przejmuj się.
                                Po prostu używaj języka! 
                                Z moją pomocą</p>
                            {/*<ul className="actions"> */}
                               {/* <li>*/}
                                {/*    <Link to="/contact" className="button">Więcej</Link> */}
 {/*                               </li>*/}
    {/*                        </ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <img src={pic09} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski w biznesie</h3>
                            </header>
                            <p>Informacja w przygotowaniu.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={pic10} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski dla pracowników nauki</h3>
                            </header>
                            <p>Informacja wkrótce.</p>

                        </div>
                    </div>
                </section>
                {/*<section>*/}
                {/*    <img src={pic08} alt="" />*/}
                {/*    <div className="content">*/}
                {/*        <div className="inner">*/}
                {/*            <header className="major">*/}
                {/*                <h3>Angielski ogólny</h3>*/}
                {/*            </header>*/}
                {/*            <p>Wkrótce więcej informacji o naszych szkoleniach.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section>
                    <img src={pic08} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Konwersacje</h3>
                            </header>
                            <p>Chcesz tylko odświeżyć swój angielski? Przygotowujesz się do wyjazdu na konferencję? Na spotkanie biznesowe? Na wakacje? Zapraszamy na konwersacje.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
