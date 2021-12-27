import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    Navbar
                    <span class="badge bg-dark m-2">{props.totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;