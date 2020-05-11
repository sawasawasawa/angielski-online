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
                            <p>
                                Miliony zwykłych ludzi zna obce języki. Jednak wielu innych myśli, że nie są w stanie się ich nauczyć.
                                Mówią więc:
                            </p>

                            <ul>
                                <li>
                                    <i><strong>Nigdy nie miałem okazji nauczyć się obcego języka, a teraz jestem za stary.</strong></i>
                                    <br/>
                                    Nie! Nigdy nie jest się za starym na naukę.
                                </li>
                                <li>
                                    <i><strong>Nauczenie się wszystkich słów i gramatyki zabrałoby mi całe lata</strong></i>
                                    <br/>
                                    Nie musisz nauczyć się całego języka - możesz zacząć się posługiwać językiem przy bardzo małej jego
                                    znajomości, ucząc się go po trochu.
                                </li>

                                 <li>
                                     <i><strong>Gdy robię wiele błędów, czuję się zażenowany</strong></i>
                                     <br/>
                                     Nie musisz. Robienie błędów jest częścią procesu nauki języka I inni to zrozumieją, więc nie przejmuj się.
                                     Po prostu używaj języka!
                                     Z moją pomocą :)
                                 </li>
                                </ul>
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
                            <p>Compute znaczy liczyć. Jeśli chcesz być konkurencyjny - musisz nie tylko liczyć po angielsku.
                                Musisz również umieć posługiwać się angielskim w różnych kontekstach kulturowych.
                                Inaczej prowadzi się negocjacje z przedsiębiorcami z Dalekiego Wschodu, inaczej z Europy Zachodniej czy
                                Ameryki. To, co w jednej kulturze uważane jest za elegancję, w innej uchodzi za obraźliwe. I to także
                                jest element Business English. Nie wystarczy znać słówka oraz gramatykę, aby prowadzić z powodzeniem
                                interesy. Internet ułatwia nawiązywanie kontaktów, ale chcąc je rozwijać, trzeba rozumieć konteksty
                                kulturowe. Nieodzowna jest też znajomość zasad etyki i umiejętność wyrażenia jej w języku angielskim.
                                Byłem menedżerem sprzedaży w Europie i Azji – nauczę Cię.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={pic10} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski egzaminacyjny</h3>
                            </header>
                            <p>Egzamin językowy składa się z części  pisemnej obejmującej rozumienie tekstu, pisanie, rozumienie ze
                                słuchu, struktury gramatyczne i słownictwo oraz z części ustnej, polegającej na rozmowie z innym
                                egzaminowanym lub z egzaminatorem na dany temat. Co daje certyfikat językowy? Potwierdza solidne
                                podstawy, umiejętność rozmowy, znajomość słownictwa i struktur gramatycznych na określonym poziomie.
                                Przygotuje Cię do egzaminów Cambridge, TOEFL, TELC albo do matury z angielskiego.</p>

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
                            <p>Chcesz tylko odświeżyć swój angielski? Przygotowujesz się do wyjazdu na konferencję? Na spotkanie
                                biznesowe? Na wakacje? Zapraszamy na konwersacje.<br/>
                                Jest to najtrudniejsza z umiejętności językowych. Na jej skuteczność wpływają pojedyncze umiejętności
                                nabywane w całym procesie nauki, pomagają też cechy charakteru, a kontrowersyjne tematy często stają się
                                skutecznym bodźcem. Ćwiczenie mówienia mogą nam ułatwić i uprzyjemnić liczne narzędzia internetowe:
                                publikacje i podkasty dotyczące aktualnych wiadomości. Elementem konwersacji mogą być samodzielnie
                                tworzone materiały np. prezentacje produktów lub usług. Dodatkowym atutem może być tematyka – im
                                ciekawsza, tym chętniej realizowana. Możemy rozmawiać na każdy temat, który Cię interesuje.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
