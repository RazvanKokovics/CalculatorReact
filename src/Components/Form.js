import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class Form extends Component{

    handleOpen = () => {
        this.props.openHandler();
    }

    handleClose = () => {
        this.props.closeHandler();
    }

    render(){
        return(
            <Dialog open={this.props.opened} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <DialogContent>
                <form className="" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Username"
                                id="username"
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
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        
                            
                    </Grid>
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className=""
                    >
                        Log In
                    </Button>
  
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="#" variant="body2">
                            <br></br>
                            Don't have an account? Register.
                        </Link>
                        </Grid>
                    </Grid>
                
                </form>
            </DialogContent>
            </Dialog>
        )
    }
}

export default Form;