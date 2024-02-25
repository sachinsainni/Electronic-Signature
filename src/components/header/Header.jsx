import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/vite.svg'

export default function Header() {
    const [pathname, setPathname] = useState('/')

    useEffect(() => {
        setPathname(location.pathname)
    }, [location])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100" data-bs-theme="dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to='/' >E-Signature <img src={logo} width='20px' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-link active" aria-current="true" href="#">Home</a> */}
                        <Link className={`nav-link ${pathname === '/signaturePad' && "active "}`} to='/signaturePad'   >E-Pad</Link>
                        <Link className={`nav-link ${pathname === '/paint' && "active "}`} to='/paint'   >Paint</Link>
                        {/* <a className="nav-link" href="#">Pricing</a> */}
                        {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
