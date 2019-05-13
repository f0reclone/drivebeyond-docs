import React from 'react'
import { Spirit } from '../../../styles/spirit-styles'
import { Link } from 'gatsby'
import { Icon, Logo } from '../.'

const listItemClass = `mb2 lh-1-65` // TODO: Probably should go to spirit-styles.js
const linkClass = `link pa2 midgrey hover-blue dib mr5 f8`

const Footer = () => (
    <footer className="pt10 pt-vw3-ns pb-vw3 bt b--whitegrey">

        <section className={`${Spirit.page.xl} grid-12`}>

            <a href="https://drivebeyond.eu" className="db col-12 col-6-ns pr2 pr20-ns pt12 pt7-ns pb7 pl2 pl30-ns relative tdn bn br-ns b--whitegrey dark-h4-hover">
                <Icon name="cloud-upload" className="absolute top-0 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-green" />
                <h4 className={`${Spirit.h4} darkgrey`}>Sie sind noch nicht bei DriveBeyond?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>
                    Testen Sie noch heute kostenfrei unsere Services und erhalten Sie die volle Kontrolle über Ihre Online-Präsenz.
                </p>
            </a>

            <a href="mailto:info@drivebeyond.eu" className="db col-12 col-6-ns pr2 pr20-ns pt18 pt7-ns pb7 pl2 pl30-ns bt b--whitegrey bn-ns relative tdn dark-h4-hover">
                <Icon name="chat-double-bubble" className="absolute top-6 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-purple" />
                <h4 className={`${Spirit.h4} darkgrey`}>Sie finden keine Antwort auf Ihre Frage?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>Schreiben Sie uns eine Mail und wir werden das Thema aufnehmen.</p>
            </a>

        </section>

        <section className={`${Spirit.page.xl} m1 mt-vw3-ns`}>

            <div className="bt b--whitegrey flex justify-between items-center pt4">
                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://drivebeyond.eu" className="dib pt2 mr6"><Logo /></a></li>
                    <li className={`${listItemClass} dn db-l`}><Link to="/" className={linkClass}>Wiki Startseite</Link></li>
                </ul>

                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://drivebeyond.eu" className="link pa2 midgrey hover-blue dib mr0">DriveBeyond</a></li>
                </ul>
            </div>

        </section>
    </footer>
)

export default Footer
