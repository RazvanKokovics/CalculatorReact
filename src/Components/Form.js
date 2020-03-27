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

    this.handleChange = this.props.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  static propTypes = {
    buttonHandler: PropTypes.func,
    opened: PropTypes.bool,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  render() {
    const { opened } = this.props;
    const { handleChange, handleSubmit } = this;

    return (
      <Dialog open={opened} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <center>Log In</center>
        </DialogTitle>
        <DialogContent>
          <form className="" noValidate onSubmit={handleSubmit}>
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
                  onChange={this.handleChange}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
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
  }
}

export default Form;
