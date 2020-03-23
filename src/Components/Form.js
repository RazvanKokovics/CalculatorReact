import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

class Form extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.buttonHandler(username, password);
        }
    }

    render(){
        return(
            <Dialog open={this.props.opened} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <DialogContent>
                <form className="" noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                onChange={this.handleChange}
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
                    <br></br>
                </form>
            </DialogContent>
            </Dialog>
        )
    }
}

export default Form;