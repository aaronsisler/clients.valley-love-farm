import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  openSideMenu = () => this.setState({ isNavOpen: true });

  closeSideMenu = () => this.setState({ isNavOpen: false });

  render() {
    const isNavOpenClass = this.state.isNavOpen ? "nav_menu__links-open" : "";
    return (
      <nav className="nav_menu">
        <div className="nav_menu__brand">
          <Link to="/">{this.props.companyName}</Link>
        </div>
        <div className="nav_menu__toggle">
          {!this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="3x"
              className="favicon"
              onClick={this.openSideMenu}
            />
          )}
          {this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              size="3x"
              className="favicon"
              onClick={this.closeSideMenu}
            />
          )}
        </div>
        <div className={`nav_menu__links ${isNavOpenClass}`}>
          <Link
            to="/"
            className="nav_menu__links-link"
            onClick={this.closeSideMenu}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="nav_menu__links-link"
            onClick={this.closeSideMenu}
          >
            Pricing
          </Link>
          <Link
            to="/portfolio"
            className="nav_menu__links-link"
            onClick={this.closeSideMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/faq"
            className="nav_menu__links-link"
            onClick={this.closeSideMenu}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="nav_menu__links-link nav_menu__links-contact"
            onClick={this.closeSideMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  companyName: PropTypes.string.isRequired
};
