import React from 'react';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        Navbar
                        <span class="badge bg-dark m-2">{this.props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;