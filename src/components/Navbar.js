import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">ReactJS CRUD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/insert">Insert</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/view">View</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar
