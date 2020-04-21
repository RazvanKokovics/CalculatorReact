import React, { Component } from 'react';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

import 'Components/Equations.css';

class Equations extends Component {
  static propTypes = {
    equation: PropTypes.string,
    handleChange: PropTypes.func,
    checkResult: PropTypes.func,
    message: PropTypes.string,
    getEquation: PropTypes.func,
    correct: PropTypes.bool,
  };

  render() {
    const {
      equation,
      handleChange,
      checkResult,
      message,
      getEquation,
      correct,
    } = this.props;

    const renderMessage = (correct, message) => (
      <Alert variant="filled" severity={correct ? 'success' : 'error'}>
        {message}
      </Alert>
    );

    return (
      <div className="content">
        <div className="equation-content">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ minHeight: '100%' }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h3" style={{ textAlign: 'center' }}>
                Solve the equation!
              </Typography>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={5} align="right">
              <Typography variant="h4">{equation}</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h4" align="center">
                {' = '}
              </Typography>
            </Grid>

            <Grid item xs={5} align="left">
              <TextField
                variant="outlined"
                required
                name="result"
                label="Result"
                onChange={handleChange}
                color="secondary"
              />
            </Grid>

            <Grid item xs={10}>
              {message && renderMessage(correct, message)}
            </Grid>

            <Grid item xs={3}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                size="large"
                disabled={correct}
                onClick={checkResult}
              >
                Check result
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                disabled={!correct}
                onClick={getEquation}
              >
                Get new
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Equations;
