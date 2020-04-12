import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

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
                    <p>W przygotowaniu.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={pic08} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski ogólny</h3>
                            </header>
                            <p>Strona w przygotowaniu :).</p>
                            <ul className="actions">
                                <li>
                                    <Link to="/contact" className="button">Więcej</Link>
                                </li>
                            </ul>
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
                            <ul className="actions">
                                <li>
                                    <Link to="/contact" className="button">Więcej</Link>
                                </li>
                            </ul>
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
                            <ul className="actions">
                                <li>
                                    <Link to="/contact" className="button">Więcej</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={pic08} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Angielski ogólny</h3>
                            </header>
                            <p>Wkrótce więcej informacji o naszych szkoleniach.</p>
                            <ul className="actions">
                                <li>
                                    <Link to="/contact" className="button">Więcej</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={pic08} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Konwersacje</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li>
                                    <Link to="/contact" className="button">Więcej</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
