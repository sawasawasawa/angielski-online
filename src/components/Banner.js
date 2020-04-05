import React from 'react'
import home from '../content/home'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{home.top.heading}</h1>
            </header>
            <div className="content">
                {home.top.body}
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Więcej</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
