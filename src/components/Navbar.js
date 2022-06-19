import React from 'react'
import logo from "./images/logo.png"
import bg from "./images/hero-bg.jpg"

export default function Navbar() {
    return (
        <div>
            <section>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt='' className='logo-png' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WORKS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#'>BLOG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#'>CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            <div className='background'>
                <img src={bg} alt='' className='bg' />
            </div>
        </div>
    )
}
