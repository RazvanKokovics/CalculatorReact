import React, {Component} from 'react';
import './DisplayContainer.css';
import PropTypes from 'prop-types';

class DisplayContainer extends Component{
    static propTypes = {
        children : PropTypes.object,
    }
    render(){
        return(
            <div className="grid-item grid-item-double-all input">
                {this.props.children}
            </div>
        );
    }
}

export default DisplayContainer;