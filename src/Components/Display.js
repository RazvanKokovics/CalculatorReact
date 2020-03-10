import React, {Component} from 'react';
import PropTypes from "prop-types";

class Display extends Component{
    static propTypes = {
        value: PropTypes.string,
    };
    render(){
        return(
            <div>{this.props.value}</div>
        );
    }
}

export default Display;