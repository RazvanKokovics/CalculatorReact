import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class LoginPanel extends Component {
  static propTypes = {
    logoutHandler: PropTypes.func,
    username: PropTypes.string,
  };

  logoutClick = () => {
    this.props.logoutHandler();
  };

  render() {
    if (this.props.username) {
      return (
        <Grid className="login-div" container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              {'Hello, ' + this.props.username}
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => this.logoutClick()}
            >
              Logout
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      );
    } else {
      return <div className="login-div">Please sign in first!</div>;
    }
  }
}

export default LoginPanel;
