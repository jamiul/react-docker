import React from 'react';

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    Navbar
                    <span class="badge bg-dark m-2">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;