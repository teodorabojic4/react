import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Konvertor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/spisak'>Spisak valuta</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
