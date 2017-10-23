import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
    return(<nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/'>Benchmarking App</Link>
                        </div>
                        <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>)
    }
}
