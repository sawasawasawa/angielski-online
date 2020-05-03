import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import SEO from '../components/SEO'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <SEO/>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Sprawdź swój poziom</h3>
                                <p>Darmowy test języka angielskiego</p>
                            </header>
                            <Link to="/test" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Kursy</h3>
                                <p>Sprawdź naszą ofertę</p>
                            </header>
                            <Link to="/kursy" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Tłumaczenia</h3>
                                <p>Polski &harr; angielski</p>
                            </header>
                            <Link to="/tlumaczenia" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>O mnie</h3>
                                <p>Czyli dlaczego warto ze mną się uczyć</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Rekomendacje</h3>
                                <p>Opinie uczniów</p>
                            </header>
                            <Link to="/opinie" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Lekcja próbna</h3>
                                <p>Poznajmy się!</p>
                            </header>
                            <Link to="/lekcja-probna" className="link primary"></Link>
                        </article>
                    </section>
                    {/*<section id="two">*/}
                    {/*    <div className="inner">*/}
                    {/*        <header className="major">*/}
                    {/*            <h2>Massa libero</h2>*/}
                    {/*        </header>*/}
                    {/*        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>*/}
                    {/*        <ul className="actions">*/}
                    {/*            <li><Link to="/landing" className="button next">Get Started</Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
