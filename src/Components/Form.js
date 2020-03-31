import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
    };

    this.changeForm = this.changeForm.bind(this);
  }

  static propTypes = {
    buttonHandler: PropTypes.func,
    opened: PropTypes.bool,
    handleChange: PropTypes.func,
    handleRegister: PropTypes.func,
  };

  changeForm() {
    const { register } = this.state;

    this.setState({ register: !register });
  }

  render() {
    const { opened, handleChange, handleRegister, buttonHandler } = this.props;
    const { register } = this.state;

    if (register) {
      return (
        <Dialog open={opened} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <center>Register</center>
          </DialogTitle>
          <DialogContent>
            <form className="" noValidate onSubmit={handleRegister}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    label="E-Mail"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="firstname"
                    label="First Name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="lastname"
                    label="Last Name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    onClick={this.changeForm}
                    variant="contained"
                    color="primary"
                  >
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      );
    } else {
      return (
        <Dialog open={opened} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <center>Log In</center>
          </DialogTitle>
          <DialogContent>
            <form className="" noValidate onSubmit={buttonHandler}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.changeForm}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      );
    }
  }
}

export default Form;
