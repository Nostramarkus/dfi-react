import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        fixed="top"
        className="dfi-bg font-bebas"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://designforinterior.com//assets/img/logo_menu.svg"
              className="logo-menu"
              alt="Logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <NavDropdown title="Koop design items">
                {this.props.cats.map(cat => (
                  <NavLink
                    key={cat.id}
                    onClick={() => this.props.handleCatClick(cat.id)}
                    to="/"
                    className="dropdown-item"
                  >
                    {cat.name}
                  </NavLink>
                ))}
              </NavDropdown>
              <div className="d-none d-lg-block">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <NavDropdown title="Verkoop design items">
                <NavDropdown.Item>Inloggen</NavDropdown.Item>
                <NavDropdown.Item>Account aanmaken</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Menu;
