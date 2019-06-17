import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Icon, Box } from '../components/common'
import { Layout } from '../components/common/layout'
import { HomeHeader, HomeAPIBox, HomeFAQLink } from '../components/home'
import { Spirit } from '../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../components/common/meta'
import fblogo from "../images/integrations/f_logo_RGB-Blue_144.png"
import iglogo from "../images/integrations/glyph-logo_May2016.png"
import gmblogo from "../images/integrations/googlemybusiness.png"
import mlogo from "../images/integrations/matomo-logo.png"

const HomePage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `DriveBeyond Wiki`
    const description = `Alle Erklärungen zu der DriveBeyond Webseite für Fahrschulen und Verwaltungssoftware.`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout
                headerDividerStyle="shadow"
                bodyClass="bg-white"
                mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                header={<HomeHeader />}
            >
                <div className="pt-vw3 home-main-box-padding-ns">

                    <section className={`${Spirit.page.xl} col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns`}>
                        <Link to="/integrations/" className={`${Spirit.h3} link darkgrey hover-midgrey`}>Verknüpfungen</Link>
                        <p className={`${Spirit.p} mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns`}>
                            Bleiben Sie vernetzt und teilen Sie Inhalte.
                            <Link to="#" className="blue link din nb1 mt2 mt0-ns hover-underline-blue">
                                <span className="flex items-center fw5">Alle Verknüpfungen ansehen <Icon name="arrow-right" className="w3 h3 ml1 fill-blue" /></span>
                            </Link>
                        </p>
                        <div className="grid-integrations-index mt4 mt6-l f8">
                            <Box to="/smartsocial/profile" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src={fblogo} alt="Facebook" />
                                Facebook
                            </Box>
                            <Box to="/smartsocial/profile" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src={iglogo} alt="Instagram" />
                                Instagram
                            </Box>
                            <Box to="#" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src={gmblogo} alt="GoogleMyBusiness" />
                                GoogleMyBusiness
                            </Box>
                            <Box to="#" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src={mlogo} alt="Matomo Besuchertracking" />
                                Matomo Besuchertracking
                            </Box>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

HomePage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
