import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark rounded">
                <ul className="nav navbar-nav">
                    <li className="nav-item">Sign In</li>
                </ul>
            </nav>
        )
    }
}
