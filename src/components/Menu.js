import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Strona główna</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/kursy">Kursy</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">O mnie</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/kontakt">Kontakt</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/lekcja-probna" className="button special fit">Lekcja próbna</a></li>
                <li><a href="/test" className="button fit">Test - sprawdź się!</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} >Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
