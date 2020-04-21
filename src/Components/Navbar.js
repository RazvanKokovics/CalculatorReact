import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import 'Components/Navbar.css';

class NavigationBar extends Component {
  static propTypes = {
    logoutHandler: PropTypes.func,
    loginHandler: PropTypes.func,
    username: PropTypes.string,
  };

  render() {
    const { username, logoutHandler, loginHandler } = this.props;

    let userButtons;
    if (username) {
      userButtons = () => {
        return (
          <>
            <li>{'Hello, ' + username}</li>
            <li>
              <Button variant="contained" onClick={logoutHandler}>
                Logout
              </Button>
            </li>
          </>
        );
      };
    } else {
      userButtons = () => {
        return (
          <>
            <li>Sign in first!</li>
            <li>
              <Button variant="contained" onClick={loginHandler}>
                Login
              </Button>
            </li>
          </>
        );
      };
    }

    return (
      <nav className="navigation-bar">
        <ul className="float-left">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/equations/" activeClassName="active">
              Equations
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics/" activeClassName="active">
              Statistics
            </NavLink>
          </li>
        </ul>
        <ul className="float-right">{userButtons()}</ul>
      </nav>
    );
  }
}

export default NavigationBar;
