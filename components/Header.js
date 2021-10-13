import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <Image className="masthead-avatar mb-5" src="/img/avataaars.svg" width="100%" height="100%" alt="..." />
            <h1 className="masthead-heading text-uppercase mb-0">Saham Syariah Bisa</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>
    )
}

export default Header
