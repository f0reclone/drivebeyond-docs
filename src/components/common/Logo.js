import React from 'react'
import PropTypes from 'prop-types'
import logo from "../../images/DriveBeyond-Logo-blau1.png"

const Logo = ({ height, theme }) => {
    const fillColor = theme === `light` ? `#FFFFFF` : `#2D3134`

    return <img src={ logo } class="navbar-brand"></img>
}

Logo.defaultProps = {
    height: 25,
    theme: `dark`,
}

Logo.propTypes = {
    height: PropTypes.number,
    theme: PropTypes.string,
}

export default Logo
